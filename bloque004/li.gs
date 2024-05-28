#=======================================================================================
#=======================================================================================
#=============================== LIFTED INDEX GENERAL ==================================
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
'color -10 0 1 -kind darkorange->gold->yellowgreen->powderblue->snow'
'd no4lftx180_0mb'
'cbarnskip 1'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set clab masked'
'set ccolor 4'
'd no4lftx180_0mb'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Indice Lifted (K)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_004/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+3
endwhile

'quit'
