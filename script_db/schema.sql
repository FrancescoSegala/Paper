-- paper.audit definition

-- Drop table

-- DROP TABLE audit;

CREATE TABLE audit (
	id varchar NULL,
	username varchar NULL,
	"at" varchar NULL,
	url varchar NULL,
	"method" varchar NULL,
	request varchar NULL,
	response varchar NULL,
	status varchar NULL
);


-- paper.audit_report definition

-- Drop table

-- DROP TABLE audit_report;

CREATE TABLE audit_report (
	"at" varchar NULL,
	url varchar NULL,
	"method" varchar NULL,
	status varchar NULL,
	qty numeric NULL
);


-- paper.dealers definition

-- Drop table

-- DROP TABLE dealers;

CREATE TABLE dealers (
	id varchar NOT NULL,
	description varchar NOT NULL,
	digital varchar NULL,
	CONSTRAINT dealers_pk PRIMARY KEY (id)
);


-- paper.document_types definition

-- Drop table

-- DROP TABLE document_types;

CREATE TABLE document_types (
	id varchar NULL,
	description varchar NULL
);


-- paper.documents definition

-- Drop table

-- DROP TABLE documents;

CREATE TABLE documents (
	id varchar NULL,
	type_id varchar NULL,
	url varchar NULL,
	created_at varchar NULL,
	box_id varchar NULL,
	practice_id varchar NULL,
	request_id varchar NULL
);


-- paper.lists definition

-- Drop table

-- DROP TABLE lists;

CREATE TABLE lists (
	id varchar NOT NULL,
	waybill_id varchar NULL,
	created_at varchar NULL,
	urgent varchar NULL,
	dealer_id varchar NULL,
	CONSTRAINT lists_pk PRIMARY KEY (id)
);
CREATE INDEX lists_waybill_id_idx ON paper.lists USING btree (lower((waybill_id)::text), created_at DESC);


-- paper.lists_practices definition

-- Drop table

-- DROP TABLE lists_practices;

CREATE TABLE lists_practices (
	list_id varchar NULL,
	practice_id varchar NULL
);
CREATE UNIQUE INDEX lists_practice_id_list_id_idx ON paper.lists_practices USING btree (list_id, practice_id);


-- paper.practices definition

-- Drop table

-- DROP TABLE practices;

CREATE TABLE practices (
	id varchar NOT NULL,
	urgent varchar NOT NULL,
	created_at varchar NULL,
	arrived_at varchar NULL,
	CONSTRAINT practices_pk PRIMARY KEY (id)
);
CREATE INDEX practices_created_at_idx ON paper.practices USING btree (created_at);
CREATE INDEX practices_id_idx ON paper.practices USING btree (lower((id)::text), arrived_at DESC);
CREATE INDEX practices_trigram_idx_1 ON paper.practices USING gin (id paper.gin_trgm_ops);


-- paper.requests definition

-- Drop table

-- DROP TABLE requests;

CREATE TABLE requests (
	id varchar NOT NULL,
	created_at varchar NULL,
	created_by varchar NULL,
	practice_id varchar NULL,
	address varchar NULL,
	completed_at varchar NULL,
	completed_by varchar NULL,
	completed varchar NULL,
	CONSTRAINT requests_pk PRIMARY KEY (id)
);


-- paper."translation" definition

-- Drop table

-- DROP TABLE "translation";

CREATE TABLE "translation" (
	"label" varchar NULL,
	"translation" varchar NULL,
	"language" varchar NULL
);


-- paper.waybills definition

-- Drop table

-- DROP TABLE waybills;

CREATE TABLE waybills (
	id varchar NOT NULL,
	created_at varchar NOT NULL,
	urgent varchar NULL,
	arrived_at varchar NULL,
	CONSTRAINT waybills_pk PRIMARY KEY (id)
);
CREATE INDEX waybills_arrived_at_idx ON paper.waybills USING btree (arrived_at);
CREATE INDEX waybills_created_at_idx ON paper.waybills USING btree (created_at);
CREATE INDEX waybills_id_idx ON paper.waybills USING btree (id);
CREATE INDEX waybills_idx_ft ON paper.waybills USING gin (to_tsvector('english'::regconfig, (id)::text));





-- paper.v_dealers source

CREATE OR REPLACE VIEW paper.v_dealers
AS SELECT d.id,
    d.description,
    lower((d.id::text || ' - '::text) || d.description::text) AS dealer
   FROM paper.dealers d;


-- paper.v_documents source

CREATE OR REPLACE VIEW paper.v_documents
AS SELECT d.id,
    d.type_id,
    d.url,
    d.created_at,
    d.box_id,
    d.practice_id,
    dt.description
   FROM paper.documents d,
    paper.document_types dt
  WHERE d.type_id::text = dt.id::text;


-- paper.v_lists source

CREATE OR REPLACE VIEW paper.v_lists
AS SELECT l.id,
    l.waybill_id,
    l.created_at,
    l.urgent,
    l.dealer_id,
    d.description,
    d.digital,
    ( SELECT json_agg(lists_practices.practice_id) AS json_agg
           FROM paper.lists_practices
          WHERE lists_practices.list_id::text = l.id::text) AS practice_id
   FROM paper.lists l,
    paper.dealers d
  WHERE d.id::text = l.dealer_id::text;
