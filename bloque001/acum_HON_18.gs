#=======================================================================================
#=======================================================================================
#========================= LLUVIA ACUMULADA EN 24 HORAS  ===============================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

#Script PARA PRECIPITACION TOTAL ACUMULADA EN 24 HORAS
'c'
#========================================================
'set xsize 1400 1050'
'set lat 12.7 17'
'set lon 269.8 277.3'
'set mpdset nmap'
'set display color white'
'set gxout shaded'
'set t 2'
't=2'
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
'tt14=apcpsfc'
'set t 20'
't=20'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'tt38=apcpsfc'
'tt24=tt38-tt14'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t=2,t=20)'
'cbar'
'set line 1'
'draw shp GTM_adm0.shp'
'draw shp HND_adm1.shp'
'draw shp NIC_adm0.shp'
'draw shp SLV_adm0.shp'
'draw shp BLZ_adm0.shp'
'draw shp MEX_adm0.shp'
'draw title Precipitacion Total Acumulada en 24 horas (mm)\Desde 'ta' hasta 't1''
#'draw string 4.5 0.2 WRF'
'printim /home/arw/trabajo/grads_temp_001/24_HON.png x1920 y1440'
#*******************************************************
#Script PARA PRECIPITACION TOTAL ACUMULADA EN 48 HORAS
'c'
'set t 20'
't=20'
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
'tt38=apcpsfc'
'set t 44'
't=44'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'tt62=apcpsfc'
'tt48=tt62-tt24'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t=20,t=44)'
'cbar'
'set line 1'
'draw shp GTM_adm0.shp'
'draw shp HND_adm1.shp'
'draw shp NIC_adm0.shp'
'draw shp SLV_adm0.shp'
'draw shp BLZ_adm0.shp'
'draw shp MEX_adm0.shp'
'draw title Precipitacion Total Acumulada en 24 horas (mm)\Desde 'ta' hasta 't1''
#'draw string 4.5 0.2 WRF'
'printim /home/arw/trabajo/grads_temp_001/48_HON.png x1920 y1440'
#*******************************************************
#*******************************************************
#Script PARA PRECIPITACION TOTAL ACUMULADA EN 72 HORAS
'c'
'set t 44'
't=44'
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
'set t 68'
't=68'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'tt72=apcpsfc'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t=44,t=68)'
'cbar'
'set line 1'
'draw shp GTM_adm0.shp'
'draw shp HND_adm1.shp'
'draw shp NIC_adm0.shp'
'draw shp SLV_adm0.shp'
'draw shp BLZ_adm0.shp'
'draw shp MEX_adm0.shp'
'draw title Precipitacion Total Acumulada en 24 horas (mm)\Desde 'ta' hasta 't1''
#'draw string 4.5 0.2 WRF'
'printim /home/arw/trabajo/grads_temp_001/72_HON.png x1920 y1440'
#*******************************************************
'quit'
