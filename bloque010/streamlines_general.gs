#=======================================================================================
#=======================================================================================
#================================ STREAMLINES GENERAL ==================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

'reset graphics'
'set mpdset hires'
'set display color white'

#Script EXPERIMENTAL PARA STREAMLINES A 10 METROS
'c'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd mag(ugrd10m*1.94,vgrd10m*1.94)'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Lineas de corriente a 10 metros (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_010/10m/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA STREAMLINES A 1000 MB
'c'
'set lev 1000'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd mag(ugrdprs*1.94,vgrdprs*1.94)'
'set ccolor 15'
'set gxout stream'
'd ugrdprs*1.94;vgrdprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Lineas de corriente a 1000 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_010/1000/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA STREAMLINES A 850 MB
'c'
'set lev 850'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd mag(ugrdprs*1.94,vgrdprs*1.94)'
'set ccolor 15'
'set gxout stream'
'd ugrdprs*1.94;vgrdprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Lineas de corriente a 850 Hpa (Kt)\Valido para 't1' '

'printim /home/arw/trabajo/grads_temp_010/850/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA STREAMLINES A 700 MB
'c'
'set lev 700'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd mag(ugrdprs*1.94,vgrdprs*1.94)'
'set ccolor 15'
'set gxout stream'
'd ugrdprs*1.94;vgrdprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Lineas de corriente a 700 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_010/700/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA STREAMLINES A 500 MB
'c'
'set lev 500'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd mag(ugrdprs*1.94,vgrdprs*1.94)'
'set ccolor 15'
'set gxout stream'
'd ugrdprs*1.94;vgrdprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Lineas de corriente a 500 Hpa (Kt)\Valido para 't1' '

'printim /home/arw/trabajo/grads_temp_010/500/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA STREAMLINES A 400 MB
'c'
'set lev 400'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd mag(ugrdprs*1.94,vgrdprs*1.94)'
'set ccolor 15'
'set gxout stream'
'd ugrdprs*1.94;vgrdprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Lineas de corriente a 400 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_010/400/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script EXPERIMENTAL PARA STREAMLINES A 300 MB
'c'
'set lev 300'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd mag(ugrdprs*1.94,vgrdprs*1.94)'
'set ccolor 15'
'set gxout stream'
'd ugrdprs*1.94;vgrdprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Lineas de corriente a 300 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_010/300/'t'.png x1920 y1440'
'c'
t = t+1
endwhile 

#Script STREAMLINES A 200 MB
'c'
'set lev 200'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd mag(ugrdprs*1.94,vgrdprs*1.94)'
'set ccolor 15'
'set gxout stream'
'd ugrdprs*1.94;vgrdprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Lineas de corriente a 200 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_010/200/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script STREAMLINES A 100 MB
'c'
'set lev 100'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd mag(ugrdprs*1.94,vgrdprs*1.94)'
'set ccolor 15'
'set gxout stream'
'd ugrdprs*1.94;vgrdprs*1.94'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Lineas de corriente a 100 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_010/100/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

'quit'
