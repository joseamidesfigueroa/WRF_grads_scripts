#=======================================================================================
#=======================================================================================
#======================== LLUVIA ACUMULADA CADA 6 HORAS  ===============================
#======================== JUAN JOSE AMIDES FIGUEROA URBANO =============================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

#Script PARA PRECIPITACION TOTAL EN CADA PERIODO
'set mpdset hires'
'set display color white'
'set gxout shaded'
'c'
#*******************************************************

#========================================================
#=============== COMENZANDO PROGRAMACION ================
#========================================================

#********************************************************
#SE PREPARAN ACUMULADOS CADA 6 HORAS
'set t 1'
t=1
tf=6
while (t <= 88)
'set t 't''
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd sum(apcpsfc,t='t',t='tf')'
'cbar'
'q time'
x1=sublin(result,1)
ti=subwrd(x1,3)
tb=subwrd(x1,3)
t2=subwrd(x1,5)
#**********************
'set t 'tf''
'q time'
x1=sublin(result,1)
tfi=subwrd(x1,3)
#**********************

#'draw title Precipitacion Acumulada cada 3 horas (mm)\Valido para 't1' :: F'titi' '
'draw title Precipitacion Acumulada en 3 horas (mm)\Desde 'ti' hasta 'tfi' '
#'draw string 4.5 0.2 WRF El Salvador'
'printim /home/arw/trabajo/grads_temp_001/'t'.png x1920 y1440'
'c'
t= t+6
tf=t+6
endwhile
#********************************************************
'quit'
