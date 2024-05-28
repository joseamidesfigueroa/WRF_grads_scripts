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
'color -100 -40 1 -kind snow->snow->fuchsia->snow->dimgray->red->orange->yellow->lime->navy->deepskyblue->paleturquoise->deepskyblue->snow'
'd tmptrop-273.15'
'cbarnskip 5'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set clab masked'
'set ccolor 1'
'set cmin -100'
'set cmax -40'
'set cint 1'
'd tmptrop-273.15'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Temperatura de la tropopausa (Celsius)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_006/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
