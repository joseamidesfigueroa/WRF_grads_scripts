#=======================================================================================
#=======================================================================================
#============================== HUMEDAD RELATIVA GENERAL ===============================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

'reset graphics'
'set mpdset hires'
'set display color white'

#Script EXPERIMENTAL PARA HUMEDAD RELATIVA A 2 METROS
'c'
'set t 1'
t = 1
while (t <= 87)
'set t 't''
'set grads off'
'set gxout shaded'
'color 0 100 5 -kind red->orange->yellow->lightgreen->darkseagreen->yellowgreen->royalblue'
'd rh2m'
'cbar'
'set gxout contour'
'set ccolor 15'
'set cint 5'
'd rh2m'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Humedad relativa a 2 metros (%)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_009/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA HUMEDAD RELATIVA A 1000 MB
'c'
'set lev 1000'
'set t 1'
t = 1
while (t <= 87)
'set t 't''
'set grads off'
'set gxout shaded'
'color 0 100 5 -kind red->orange->yellow->lightgreen->darkseagreen->yellowgreen->royalblue'
'd rhprs'
'cbar'
'set gxout contour'
'set ccolor 15'
'set cint 5'
'd rhprs'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Humedad relativa a 1000 Hpa (%)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_009/1000/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA HUMEDAD RELATIVA A 850 MB
'c'
'set lev 850'
'set t 1'
t = 1
while (t <= 87)
'set t 't''
'set grads off'
'set gxout shaded'
'color 0 100 5 -kind red->orange->yellow->lightgreen->darkseagreen->yellowgreen->royalblue'
'd rhprs'
'cbar'
'set gxout contour'
'set ccolor 15'
'set cint 5'
'd rhprs'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Humedad relativa a 850 Hpa (%)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_009/850/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script EXPERIMENTAL PARA HUMEDAD RELATIVA A 700 MB
'c'
'set lev 700'
'set t 1'
t = 1
while (t <= 87)
'set t 't''
'set grads off'
'set gxout shaded'
'color 0 100 5 -kind red->orange->yellow->lightgreen->darkseagreen->yellowgreen->royalblue'
'd rhprs'
'cbar'
'set gxout contour'
'set ccolor 15'
'set cint 5'
'd rhprs'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Humedad relativa a 700 Hpa (%)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_009/700/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA HUMEDAD RELATIVA A 500 MB
'c'
'set lev 500'
'set t 1'
t = 1
while (t <= 87)
'set t 't''
'set grads off'
'set gxout shaded'
'color 0 100 5 -kind red->orange->yellow->lightgreen->darkseagreen->yellowgreen->royalblue'
'd rhprs'
'cbar'
'set gxout contour'
'set ccolor 15'
'set cint 5'
'd rhprs'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Humedad relativa a 500 Hpa (%)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_009/500/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA HUMEDAD RELATIVA A 400 MB
'c'
'set lev 400'
'set t 1'
t = 1
while (t <= 87)
'set t 't''
'set grads off'
'set gxout shaded'
'color 0 100 5 -kind red->orange->yellow->lightgreen->darkseagreen->yellowgreen->royalblue'
'd rhprs'
'cbar'
'set gxout contour'
'set ccolor 15'
'set cint 5'
'd rhprs'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Humedad relativa a 400 Hpa (%)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_009/400/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA HUMEDAD RELATIVA A 300 MB
'c'
'set lev 300'
'set t 1'
t = 1
while (t <= 87)
'set t 't''
'set grads off'
'set gxout shaded'
'color 0 100 5 -kind red->orange->yellow->lightgreen->darkseagreen->yellowgreen->royalblue'
'd rhprs'
'cbar'
'set gxout contour'
'set ccolor 15'
'set cint 5'
'd rhprs'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Humedad relativa a 300 Hpa (%)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_009/300/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script HUMEDAD RELATIVA A 200 MB
'c'
'set lev 200'
'set t 1'
t = 1
while (t <= 87)
'set t 't''
'set grads off'
'set gxout shaded'
'color 0 100 5 -kind red->orange->yellow->lightgreen->darkseagreen->yellowgreen->royalblue'
'd rhprs'
'cbar'
'set gxout contour'
'set ccolor 15'
'set cint 5'
'd rhprs'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Humedad relativa a 200 Hpa (%)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_009/200/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script HUMEDAD RELATIVA A 100 MB
'c'
'set lev 100'
'set t 1'
t = 1
while (t <= 87)
'set t 't''
'set grads off'
'set gxout shaded'
'color 0 100 5 -kind red->orange->yellow->lightgreen->darkseagreen->yellowgreen->royalblue'
'd rhprs'
'cbar'
'set gxout contour'
'set ccolor 15'
'set cint 5'
'd rhprs'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Humedad relativa a 100 Hpa (%)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_009/100/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

'quit'
