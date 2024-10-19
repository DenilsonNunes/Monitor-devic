-- Select que traz quantidade de vendas / hora
select 
	count(*) qtdVendas,
	DATEPART(hour, DataHora) as horas
from 
	vwVndDoc  
where 
	( DataHora between '2024-09-17 00:00:00' and '2024-10-17 23:59:59' )  
	and Fat = 1 
group by 
	DATEPART(hour, DataHora) 
order by 
	DATEPART(hour, DataHora)