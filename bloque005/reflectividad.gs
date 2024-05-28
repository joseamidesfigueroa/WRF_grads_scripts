#=======================================================================================
#=======================================================================================
#================================ REFLECTIVIDAD GENERAL ================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

'reset graphics'
'set mpdset hires'
'set display color white'

#Script EXPERIMENTAL PARA REFLECTIVIDAD A 10 METROS
'c'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'color -levs 15 30 45 60 75 90 105 120 135 150 165 180 195 210 235 250 275 300 350 375 450 500 -kind snow->gray->blue->darkblue->lime->yellow->orange->red->magenta'
'd refcclm*10'
#'d refcmaxclm'
#'set ccolor 15'
#'set gxout contour'
#'d refcclm'
'cbarnskip 2'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Radar simulado (Db)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_005/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

'quit'
