--- insert random generated waybills
insert into waybills
select
	'ldv_' || trunc(random()*10000000) as id,
	to_char(current_date - trunc(random()*1000000) * interval '1 minute', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as created_at ,
	case when random() < 0.5 then 'true' else 'false' end as urgent,
	to_char(current_date - trunc(random()*1000000) * interval '1 minute', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as arrived_at
from waybills w




select id from lists l order by random() limit 1

select id as waybill_id from waybills w order by random() limit 1


insert into lists
select
nextval('lists_sequence') ,
--max(id::numeric)+1 as id ,
-- (select id as waybill_id  from waybills where waybill_id <> '' order by random() limit 1  ) ,
'ldv_' || trunc(random()*10000000) as waybill_id,
to_char(current_date - trunc(random()*1000000) * interval '1 minute', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as created_at,
case when random() < 0.5 then 'true' else 'false' end as urgent,
--(select b.id as dealer_id from (select id  from dealers ) b where dealer_id <> '' order by random() limit 1 )
 trunc(random()*10000) as dealer_id
from lists l


select id as id from (select * from waybills w) a order by random() limit 2

select count(*) from dealers d where id :: numeric  > 1000

select count(*) from lists l

select count(*) from lists
where lists.waybill_id  not in (
	select  id from waybills w2
)


CREATE SEQUENCE lists_sequence
  start 1
  increment 1;


ALTER SEQUENCE lists_sequence RESTART WITH 2;



insert  into practices
select
'p_' || trunc(random()*1000000000) as id ,
json_build_array( '' || trunc(random()*1000000) || ''  ) as list_ids ,
case when random() < 0.5 then 'true' else 'false' end as urgent,
to_char(current_date - trunc(random()*1000000) * interval '1 minute', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as created_at ,
to_char(current_date - trunc(random()*1000000) * interval '1 minute', 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as arrived_at
from practices p


select count(*) from practices p

delete from practices where id in (select id from practices group by id having count(*) > 1 )




insert into audit_report
select substring(at, 0 , 11) as date , url ,method ,  status , count(*)   as qty from audit
where substring(at, 0 , 11) =  substring((current_date - 1)::text , 0 , 11)
group by substring(at, 0 , 11)  ,  url , method ,status


select  substring((current_date - 1 )::text , 0 , 11) as today  from audit a

insert into audit_report
select substring(at, 0 , 11) as date , url ,method ,  status , count(*)   as qty from audit
where substring(at, 0 , 11) =  substring((current_date - 6 )::text , 0 , 11)
group by substring(at, 0 , 11)  ,  url , method ,status
;

 truncate audit_report



 select
 	sum(qty) as total_calls,
 	"method",
 	at
 from audit_report ar
 where at < substring(( '2021-06-04T00:00:00+0200' )::text , 0 , 11) and at > substring(( '2021-05-28T00:00:00+0200' )::text , 0 , 11)
 group by "method", at

 select
 sum(qty) as total_calls,
 status ,
 at
 from audit_report ar
 where at < substring(( '2021-06-04T00:00:00+0200' )::text , 0 , 11) and at > substring(( '2021-05-28T00:00:00+0200' )::text , 0 , 11)
group by status , at


 --create or replace view v_audit_report_functions_call as
 SELECT
  case
    WHEN url LIKE '/api/waybills%'   THEN 'Waybills'
    WHEN url LIKE '/api/practices%' THEN 'Practices'
    WHEN url LIKE '/api/requests%' THEN 'Requests'
    WHEN url LIKE '/api/documents%' THEN 'Documents'
    WHEN url LIKE '/api/dealers%' THEN 'Dealers'
    WHEN url LIKE '/api/lists%' THEN 'Lists'
    WHEN url LIKE '/api/audit%' THEN 'Audit'
  END AS function_call
, sum(qty) AS tot_call , at
FROM audit_report ar
where at < substring(( '2021-06-04T00:00:00+0200' )::text , 0 , 11) and at > substring(( '2021-05-03T00:00:00+0200' )::text , 0 , 11)
GROUP BY
at,
  CASE
    WHEN url LIKE '/api/waybills%'   THEN 'Waybills'
    WHEN url LIKE '/api/practices%' THEN 'Practices'
    WHEN url LIKE '/api/requests%' THEN 'Requests'
    WHEN url LIKE '/api/documents%' THEN 'Documents'
    WHEN url LIKE '/api/dealers%' THEN 'Dealers'
    WHEN url LIKE '/api/lists%' THEN 'Lists'
    WHEN url LIKE '/api/audit%' THEN 'Audit'
  end




  create or replace function fn_call_audit (  at_start text ,   at_end text )
  	returns table ( function_call text , tot_call text , at text)
  	as
  	$body$
  	 SELECT
  CASE
    WHEN url LIKE '/api/waybills%'   THEN 'Waybills'
    WHEN url LIKE '/api/practices%' THEN 'Practices'
    WHEN url LIKE '/api/requests%' THEN 'Requests'
    WHEN url LIKE '/api/documents%' THEN 'Documents'
    WHEN url LIKE '/api/dealers%' THEN 'Dealers'
    WHEN url LIKE '/api/lists%' THEN 'Lists'
    WHEN url LIKE '/api/audit%' THEN 'Audit'
  END AS function_call
	, sum(qty) AS tot_call
	, at
FROM audit_report ar
where at > substring(( $1 )::text , 0 , 11) and at < substring(( $2 )::text , 0 , 11)
GROUP BY
	at,
  CASE
    WHEN url LIKE '/api/waybills%'   THEN 'Waybills'
    WHEN url LIKE '/api/practices%' THEN 'Practices'
    WHEN url LIKE '/api/requests%' THEN 'Requests'
    WHEN url LIKE '/api/documents%' THEN 'Documents'
    WHEN url LIKE '/api/dealers%' THEN 'Dealers'
    WHEN url LIKE '/api/lists%' THEN 'Lists'
    WHEN url LIKE '/api/audit%' THEN 'Audit'
  end
  	$body$
  	language sql;


  select  * from fn_call_audit( '2021-05-28T00:00:00+0200' , '2021-06-04T00:00:00+0200')
