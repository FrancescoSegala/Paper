CREATE TABLE audit ( id varchar NULL, username varchar NULL, "at" varchar NULL, url varchar NULL, "method" varchar NULL, request varchar NULL, response varchar NULL, status varchar NULL );

CREATE TABLE audit_report ( "at" varchar NULL, url varchar NULL, "method" varchar NULL, status varchar NULL, qty numeric NULL );

CREATE TABLE dealers ( id varchar NOT NULL, description varchar NOT NULL, digital varchar NULL, CONSTRAINT dealers_pk PRIMARY KEY (id) );

CREATE TABLE document_types ( id varchar NULL, description varchar NULL );

CREATE TABLE documents ( id varchar NULL, type_id varchar NULL, url varchar NULL, created_at varchar NULL, box_id varchar NULL, practice_id varchar NULL, request_id varchar NULL );

CREATE TABLE lists ( id varchar NOT NULL, waybill_id varchar NULL, created_at varchar NULL, urgent varchar NULL, dealer_id varchar NULL, CONSTRAINT lists_pk PRIMARY KEY (id) );

CREATE INDEX lists_waybill_id_idx ON lists (lower(waybill_id),created_at DESC);

CREATE TABLE practices ( id varchar NOT NULL, urgent varchar NOT NULL, created_at varchar NULL, arrived_at varchar NULL, CONSTRAINT practices_pk PRIMARY KEY (id) ); -- creazione indice bitmap su id utilizzando indice GIN -- ref : https://www.postgresql.org/docs/10/indexes-types.html GIN INDEX -- ref : https://www.postgresql.org/docs/9.6/pgtrgm.html TRIGRAMMI

CREATE extension pg_trgm;

CREATE INDEX practices_id_idx ON practices (lower(id),arrived_at DESC);

CREATE INDEX practices_created_at_idx
ON practices USING btree (created_at);


CREATE INDEX practices_trigram_idx_1
ON practices USING gin (id gin_trgm_ops);

CREATE TABLE requests ( id varchar NOT NULL, created_at varchar NULL, created_by varchar NULL, practice_id varchar NULL, address varchar NULL, completed_at varchar NULL, completed_by varchar NULL, completed varchar NULL, CONSTRAINT requests_pk PRIMARY KEY (id) );

CREATE TABLE lists_practices ( list_id varchar NULL, practice_id varchar NULL );

CREATE UNIQUE INDEX lists_practice_id_list_id_idx
ON lists_practices USING btree (list_id, practice_id);

CREATE TABLE "translation" ( "label" varchar NULL, "translation" varchar NULL, "language" varchar NULL );

CREATE TABLE waybills ( id varchar NOT NULL, created_at varchar NOT NULL, urgent varchar NULL, arrived_at varchar NULL, CONSTRAINT waybills_pk PRIMARY KEY (id) );

CREATE INDEX waybills_arrived_at_idx
ON waybills USING btree (arrived_at);

CREATE INDEX waybills_created_at_idx
ON waybills USING btree (created_at);

CREATE INDEX waybills_id_idx
ON waybills USING btree (id);

CREATE INDEX waybills_idx_ft
ON waybills USING gin (to_tsvector('english'::regconfig, (id)::text));

CREATE OR REPLACE VIEW v_dealers AS
SELECT  d.id
       ,d.description
       ,lower((d.id::text || ' - '::text) || d.description::text) AS dealer
FROM dealers d;

CREATE OR REPLACE VIEW v_lists AS
SELECT  l.id
       ,l.waybill_id
       ,l.created_at
       ,l.urgent
       ,l.dealer_id
       ,d.description
       ,d.digital
       ,(
SELECT  json_agg( practice_id )
FROM lists_practices
WHERE list_id = l.id ) AS practice_id
FROM lists l, dealers d
WHERE d.id = l.dealer_id

CREATE OR REPLACE VIEW v_documents AS
SELECT  d.id
       ,d.type_id
       ,d.url
       ,d.created_at
       ,d.box_id
       ,d.practice_id
       ,dt.description
FROM documents d, document_types dt
WHERE d.type_id::text = dt.id::text;

CREATE or replace function fn_call_audit ( at_start text , at_end text ) returns TABLE ( function_call text , tot_call text , at text) AS $body$
SELECT  CASE WHEN url LIKE '/api/waybills%' THEN 'Waybills'
             WHEN url LIKE '/api/practices%' THEN 'Practices'
             WHEN url LIKE '/api/requests%' THEN 'Requests'
             WHEN url LIKE '/api/documents%' THEN 'Documents'
             WHEN url LIKE '/api/dealers%' THEN 'Dealers'
             WHEN url LIKE '/api/lists%' THEN 'Lists'
             WHEN url LIKE '/api/audit%' THEN 'Audit' END AS function_call
       ,SUM(qty)                                          AS tot_call
       ,at
FROM audit_report ar
WHERE at > substring(( $1 )::text , 0 , 11)
AND at < substring(( $2 )::text , 0 , 11)
GROUP BY  at
         ,CASE WHEN url LIKE '/api/waybills%' THEN 'Waybills'
             WHEN url LIKE '/api/practices%' THEN 'Practices'
             WHEN url LIKE '/api/requests%' THEN 'Requests'
             WHEN url LIKE '/api/documents%' THEN 'Documents'
             WHEN url LIKE '/api/dealers%' THEN 'Dealers'
             WHEN url LIKE '/api/lists%' THEN 'Lists'
             WHEN url LIKE '/api/audit%' THEN 'Audit' END $body$ language sql;

CREATE or replace function method_call_audit ( at_start text , at_end text ) returns TABLE ( total_calls text , "method" text , at text) AS $body$
SELECT  SUM(qty) AS total_calls
       ,"method"
       ,at
FROM audit_report ar
WHERE at < substring(( '2021-06-04T00:00:00+0200' )::text , 0 , 11)
AND at > substring(( '2021-05-28T00:00:00+0200' )::text , 0 , 11)
GROUP BY  "method"
         ,at $body$ language sql;

CREATE or replace function response_status_audit ( at_start text , at_end text ) returns TABLE ( total_calls text , status text , at text) AS $body$
SELECT  SUM(qty) AS total_calls
       ,status
       ,at
FROM audit_report ar
WHERE at < substring(( '2021-06-04T00:00:00+0200' )::text , 0 , 11)
AND at > substring(( '2021-05-28T00:00:00+0200' )::text , 0 , 11)
GROUP BY  status
         ,at $body$ language sql;
