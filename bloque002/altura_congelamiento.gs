#=======================================================================================
#=======================================================================================
#==================== ALTURA GEOPOTENCIAL DE CONGELAMIENTO =============================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

# Script para ALTURA GEOPOTENCIAL DE CONGELAMIENTO
'reset graphics'
'set mpdset hires'
'set display color white'
'set map 1'
'c'
t = 1
titi = 0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 4000 6000 100 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->brown'
'd hgttop0c'
'cbarnskip 2'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set clab masked'
'set ccolor 15'
'set cmin 4000'
'set cmax 6000'
'set cint 100'
'd hgttop0c'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Altura geopotencial de nivel de congelamiento (gpm)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_002/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
