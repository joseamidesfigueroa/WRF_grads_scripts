#=======================================================================================
#=======================================================================================
#================================ LLUVIA ACUMULADA  ====================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

#Script PARA PRECIPITACION TOTAL EN CADA PERIODO
'set mpdset hires'
'set display color white'
'set gxout shaded'
'set grads off'
'c'
#========================================================
#=============== COMENZANDO PROGRAMACION ================
#========================================================

#********************************************************
#EL VALOR QUE AHORA TOMA t ES LA SUMATORIA DEL VALOR ANTERIOR MAS LA CANTIDAD DE HORAS QUE SE QUIEREN OBTENER
'set t 1'
t = 1
titi=0
while (t <= 87)
'set grads off'
'set t 't''
#'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->lime->blue->yellow->orange->red->magenta'
'color -levs 0.1 0.5 1 2 3 5 7 10 15 20 25 30 35 40 45 50 60 70 80 90 100 125 150 200 300 -kind snow->paleturquoise->skyblue->deepskyblue->navy->forestgreen->limegreen->yellow->orange->wheat->plum->palevioletred->red->darkmagenta->darkviolet->orchid->lightpink->lavender->darkgray'
'd apcpsfc'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
tb=subwrd(x1,3)
t2=subwrd(x1,5)
#**********************
'set t 'to''
'q time'
x1=sublin(result,1)
ta=subwrd(x1,3)
to = t-1
#**********************
'draw title Precipitacion Acumulada cada 1 horas (mm)\Valido para 't1' :: F'titi''
'printim /home/arw/trabajo/grads_temp_001/'t'.png x1920 y1440'
'c'
t= t+1
j = t-1
to = to+1
titi=titi+1
'set t 't''
endwhile
#********************************************************
'quit'
