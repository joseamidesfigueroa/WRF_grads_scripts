#=======================================================================================
#=======================================================================================
#================================== AGUA PRECIPITABLE ==================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

# Script para AGUA PRECIPITABLE
'reset graphics'
'set mpdset hires'
'set display color white'
#'set map 15 1 2'
'c'
t = 1
titi = 0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 1 -kind snow->mintcream->aliceblue->powderblue->lightblue->green->gold->orange->darkred'
'd pwatclm'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set clab masked'
'set ccolor 15'
'set cmin 0'
'set cmax 100'
'set cint 1'
#'d pwatclm'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Total de agua precipitable (mm)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_002/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
