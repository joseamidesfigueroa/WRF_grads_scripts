#=======================================================================================
#=======================================================================================
#=========================== VELOCIDAD VERTICAL GENERAL ================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

'reset graphics'
'set mpdset hires'
'set display color white'

#Script EXPERIMENTAL PARA VELOCIDAD VERTICAL A 1000 METROS
'c'
'set lev 1000'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -7 7 1 -kind darkblue->blue->powderblue->snow->mintcream->yellowgreen->gold->chocolate->red'
'd vvelprs*1.94'
'set ccolor 15'
'set gxout contour'
'set ccolor 15'
'd vvelprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Velocidad vertical a 1000 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_012/1000/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA VELOCIDAD VERTICAL A 850 MB
'c'
'set lev 850'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -7 7 1 -kind darkblue->blue->powderblue->snow->mintcream->yellowgreen->gold->chocolate->red'
'd vvelprs*1.94'
'set ccolor 15'
'set gxout contour'
'd vvelprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Velocidad vertical a 850 Hpa (Kt)\Valido para 't1' '

'printim /home/arw/trabajo/grads_temp_012/850/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA VELOCIDAD VERTICAL A 700 MB
'c'
'set lev 700'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -7 7 1 -kind darkblue->blue->powderblue->snow->mintcream->yellowgreen->gold->chocolate->red'
'd vvelprs*1.94'
'set ccolor 15'
'set gxout contour'
'd vvelprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Velocidad vertical a 700 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_012/700/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA VELOCIDAD VERTICAL A 500 MB
'c'
'set lev 500'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -7 7 1 -kind darkblue->blue->powderblue->snow->mintcream->yellowgreen->gold->chocolate->red'
'd vvelprs*1.94'
'set ccolor 15'
'set gxout contour'
'd vvelprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Velocidad vertical a 500 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_012/500/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA VELOCIDAD VERTICAL A 400 MB
'c'
'set lev 400'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -7 7 1 -kind darkblue->blue->powderblue->snow->mintcream->yellowgreen->gold->chocolate->red'
'd vvelprs*1.94'
'set ccolor 15'
'set gxout contour'
'd vvelprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Velocidad vertical a 400 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_012/400/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA VELOCIDAD VERTICAL A 300 MB
'c'
'set lev 300'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -7 7 1 -kind darkblue->blue->powderblue->snow->mintcream->yellowgreen->gold->chocolate->red'
'd vvelprs*1.94'
'set ccolor 15'
'set gxout contour'
'd vvelprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Velocidad vertical a 300 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_012/300/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script VELOCIDAD VERTICAL A 200 MB
'c'
'set lev 200'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -7 7 1 -kind darkblue->blue->powderblue->snow->mintcream->yellowgreen->gold->chocolate->red'
'd vvelprs*1.94'
'set ccolor 15'
'set gxout contour'
'd vvelprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Velocidad vertical a 200 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_012/200/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script VELOCIDAD VERTICAL A 100 MB
'c'
'set lev 100'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -7 7 1 -kind darkblue->blue->powderblue->snow->mintcream->yellowgreen->gold->chocolate->red'
'd vvelprs*1.94'
'set ccolor 15'
'set gxout contour'
'd vvelprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Velocidad vertical a 100 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_012/100/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

'quit'
