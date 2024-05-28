#=======================================================================================
#=======================================================================================
#================================ GEOPOTENCIAL GENERAL ==================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

'reset graphics'
'set mpdset hires'
'set display color white'

#Script  GEOPOTENCIAL A 1000 MB
'c'
'set lev 1000'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 18000 100 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd hgtprs'
'set ccolor 15'
'set gxout contour'
'd hgtprs'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Altura geopotencial a 1000 Hpa (gpm)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_002/1000/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script  GEOPOTENCIAL A 850 MB
'c'
'set lev 850'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 18000 100 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd hgtprs'
'set ccolor 15'
'set gxout contour'
'd hgtprs'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Altura geopotencial a 850 Hpa (gpm)\Valido para 't1' '

'printim /home/arw/trabajo/grads_temp_002/850/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script  GEOPOTENCIAL A 700 MB
'c'
'set lev 700'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 18000 100 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd hgtprs'
'set ccolor 15'
'set gxout contour'
'd hgtprs'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Altura geopotencial a 700 Hpa (gpm)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_002/700/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script  GEOPOTENCIAL A 500 MB
'c'
'set lev 500'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 18000 100 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd hgtprs'
'set ccolor 15'
'set gxout contour'
'd hgtprs'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Altura geopotencial a 500 Hpa (gpm)\Valido para 't1' '

'printim /home/arw/trabajo/grads_temp_002/500/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script  GEOPOTENCIAL A 400 MB
'c'
'set lev 400'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 18000 100 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd hgtprs'
'set ccolor 15'
'set gxout contour'
'd hgtprs'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Altura geopotencial a 400 Hpa (gpm)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_002/400/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script  GEOPOTENCIAL A 300 MB
'c'
'set lev 300'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 18000 100 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd hgtprs'
'set ccolor 15'
'set gxout contour'
'd hgtprs'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Altura geopotencial a 300 Hpa (gpm)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_002/300/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script GEOPOTENCIAL A 200 MB
'c'
'set lev 200'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 18000 100 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd hgtprs'
'set ccolor 15'
'set gxout contour'
'd hgtprs'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Altura geopotencial a 200 Hpa (gpm)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_002/200/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script GEOPOTENCIAL A 100 MB
'c'
'set lev 100'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 15000 100 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd hgtprs'
'set ccolor 15'
'set gxout contour'
'd hgtprs'
'cbarnskip 10'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Altura geopotencial a 100 Hpa (gpm)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_002/100/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

'quit'
