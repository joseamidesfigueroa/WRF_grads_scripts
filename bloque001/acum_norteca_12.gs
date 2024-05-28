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
#'set xsize 1400 1050'
#'set lat 6 30.0'
#'set lon 262 295'
'set mpdset hires'
'set display color white'
'set gxout shaded'
'set t 2'
't=2'
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
'tt14=apcpsfc'
'set t 26'
't=26'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'tt38=apcpsfc'
'tt24=tt38-tt14'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t=2,t=26)'
'cbar'
'draw title Precipitacion Total Acumulada en 24 horas (mm)\Desde 'ta' hasta 't1' '
#'draw string 4.5 0.2 WRF El Salvador'
'printim /home/arw/trabajo/grads_temp_001/24.png x1920 y1440'
#*******************************************************
#Script PARA PRECIPITACION TOTAL ACUMULADA EN 48 HORAS
'c'
'set t 26'
't=26'
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
'tt38=apcpsfc'
'set t 50'
't=50'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'tt62=apcpsfc'
'tt48=tt62-tt38'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t=26,t=50)'
'cbar'
'draw title Precipitacion Total Acumulada en 24 horas (mm)\Desde 'ta' hasta 't1' '
#'draw string 4.5 0.2 WRF El Salvador'
'printim /home/arw/trabajo/grads_temp_001/48.png x1920 y1440'
#*******************************************************
#*******************************************************
#Script PARA PRECIPITACION TOTAL ACUMULADA EN 72 HORAS
'c'
'set t 50'
't=50'
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
'tt62=apcpsfc'
'set t 74'
't=74'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'tt86=apcpsfc'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t=50,t=74)'
'cbar'
'draw title Precipitacion Total Acumulada en 24 horas (mm)\Desde 'ta' hasta 't1' '
#'draw string 4.5 0.2 WRF El Salvador'
'printim /home/arw/trabajo/grads_temp_001/72.png x1920 y1440'
#*******************************************************
'quit'
