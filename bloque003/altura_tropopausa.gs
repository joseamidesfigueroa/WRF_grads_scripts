#=======================================================================================
#=======================================================================================
#==================== GEOPOTENCIAL DE TROPOPAUSA GENERAL ===============================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

# Script para altura geopotencial de la tropopausa general
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
'color 14000 18000 500 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->brown'
'd hgttrop'
'cbarnskip 2'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set clab masked'
'set ccolor 1'
'set cmin 14000'
'set cmax 18000'
'set cint 500'
'd hgttrop'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Altura geopotencial de la tropopausa (gpm)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_003/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
