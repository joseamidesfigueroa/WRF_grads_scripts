#=======================================================================================
#=======================================================================================
#==================================== ALTURA PBL =======================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

# Script para ALTURA DE LA PBL
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
'color 0 1800 200 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->brown'
'd hgtpbl'
'cbarnskip 1'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set clab masked'
'set ccolor 1'
'set cmin 0'
'set cmax 1800'
'set cint 200'
'd hgtpbl'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Altura de la capa limite planetaria (gpm)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_003/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
