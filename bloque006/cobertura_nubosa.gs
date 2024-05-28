#=======================================================================================
#=======================================================================================
#=================================== COVERTURA NUBOSA ==================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

# Script para temperatura
'reset graphics'
'set mpdset hires'
'set display color white'
'set map 7'
'c'
t = 1
titi = 0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'set smooth on'
'color 0 100 0.5 -kind dimgray->snow'
'd tcdcclm'
'cbarnskip 20'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set clab masked'
#'set ccolor 4'
#'set cmin 4000'
#'set cmax 6000'
#'set cint 100'
#'d hgt0c'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Cobertura total nubosa (%)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_006/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
