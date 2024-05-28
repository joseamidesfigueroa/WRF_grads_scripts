#=======================================================================================
#=======================================================================================
#==================== VISIBILIDAD PRONOSTICADA EN SUPERFICIE ===========================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

# Script para temperatura
'reset graphics'
'set mpdset hires'
'set display color white'
'c'
t = 1
titi = 0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 3000 50 -kind brown->red->chocolate->darkorange->gold->yellowgreen->powderblue->snow'
'd vissfc'
'cbarnskip 5'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Visibilidad en superficie (metros)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_006/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
