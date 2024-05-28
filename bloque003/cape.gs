#=======================================================================================
#=======================================================================================
#========================================== CAPE =======================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

# Script para CAPE
'reset graphics'
'set mpdset hires'
'set display color white'
'set map 4'
'c'
t = 1
titi = 0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 6000 500 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->brown'
'd cape255_0mb'
'cbarnskip 2'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set clab masked'
'set ccolor 1'
'set cmin 0'
'set cmax 6000'
'set cint 500'
'd cape255_0mb'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Energia Potencial Convectiva Disponible - CAPE (J/kg)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_003/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
