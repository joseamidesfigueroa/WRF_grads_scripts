#=======================================================================================
#=======================================================================================
#================================ RAFAGAS GENERAL ==================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

'reset graphics'
'set mpdset hires'
'set display color white'

#Script EXPERIMENTAL PARA RAFAGAS A 10 METROS
'c'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 0 100 5 -kind snow->powderblue->yellowgreen->gold->darkorange->chocolate->red->fuchsia'
'd gust10m*1.94'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'set line 1'
'draw shp ESA_CA_wgs84.shp'
'cbarn'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Rafagas maxima en una hora y lineas de corriente a 10 metros (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_004/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

'quit'
