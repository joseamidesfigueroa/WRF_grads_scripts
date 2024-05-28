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
'set lat 10 15.5'
'set lon 272 277.7'
'set mpdset nmap'
'set display color white'
'set gxout shaded'
'set t 14'
't=14'
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
'tt14=apcpsfc'
'set t 38'
't=38'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'tt38=apcpsfc'
'tt24=tt38-tt14'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t=14,t=38)'
'cbar'
'set line 1'
'draw shp GTM_adm0.shp'
'draw shp HND_adm0.shp'
'draw shp NIC_adm1.shp'
'draw shp SLV_adm0.shp'
'draw shp BLZ_adm0.shp'
'draw shp CRI_adm0.shp'
'draw title Precipitacion Total Acumulada en 24 horas (mm)\Desde 'ta' hasta 't1''
'draw string 4.5 0.2 WRF'
'printim /home/arw/trabajo/grads_temp_001/24_NIC.png x1920 y1440'
#*******************************************************
#Script PARA PRECIPITACION TOTAL ACUMULADA EN 48 HORAS
'c'
'set t 38'
't=38'
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
'tt38=apcpsfc'
'set t 62'
't=62'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'tt62=apcpsfc'
'tt48=tt62-tt24'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t=38,t=62)'
'cbar'
'set line 1'
'draw shp GTM_adm0.shp'
'draw shp HND_adm0.shp'
'draw shp NIC_adm1.shp'
'draw shp SLV_adm0.shp'
'draw shp BLZ_adm0.shp'
'draw shp CRI_adm0.shp'
'draw title Precipitacion Total Acumulada en 24 horas (mm)\Desde 'ta' hasta 't1''
'draw string 4.5 0.2 WRF'
'printim /home/arw/trabajo/grads_temp_001/48_NIC.png x1920 y1440'
#*******************************************************
#*******************************************************
#Script PARA PRECIPITACION TOTAL ACUMULADA EN 72 HORAS
'c'
'set t 62'
't=62'
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
'set t 86'
't=86'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'tt72=apcpsfc'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t=62,t=86)'
'cbar'
'set line 1'
'draw shp GTM_adm0.shp'
'draw shp HND_adm0.shp'
'draw shp NIC_adm1.shp'
'draw shp SLV_adm0.shp'
'draw shp BLZ_adm0.shp'
'draw shp CRI_adm0.shp'
'draw title Precipitacion Total Acumulada en 24 horas (mm)\Desde 'ta' hasta 't1''
'draw string 4.5 0.2 WRF'
'printim /home/arw/trabajo/grads_temp_001/72_NIC.png x1920 y1440'
#*******************************************************
'quit'
