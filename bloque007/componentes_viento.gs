#=======================================================================================
#=======================================================================================
#================================ COMPONENTES GENERAL ==================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

#Script EXPERIMENTAL PARA COMPONENTES A 1000MB
'c'
'set mpdset hires'
'set display color white'

##############################################################################
#------------------------------------------------ Nivel 10 m
#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrd10m'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrd10m'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 10 metros (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/10m/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################

##############################################################################
#------------------------------------------------ Nivel 1000 m
'set lev 1000'

#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrdprs'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'Ahhhhh 
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrdprs'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 1000 Hpa (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/1000/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################



##############################################################################
#------------------------------------------------ Nivel 850 m
'set lev 850'

#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrdprs'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrdprs'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 850 Hpa (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/850/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################

##############################################################################
#------------------------------------------------ Nivel 925 m
'set lev 925'

#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrdprs'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrdprs'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 925 Hpa (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/925/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################

##############################################################################
#------------------------------------------------ Nivel 700 m
'set lev 700'

#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrdprs'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrdprs'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 700 Hpa (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/700/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################

##############################################################################
#------------------------------------------------ Nivel 500 m
'set lev 500'

#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrdprs'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrdprs'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 500 Hpa (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/500/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################

##############################################################################
#------------------------------------------------ Nivel 400 m
'set lev 400'

#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrdprs'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrdprs'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 400 Hpa (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/400/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################

##############################################################################
#------------------------------------------------ Nivel 300 m
'set lev 300'

#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrdprs'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrdprs'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 300 Hpa (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/300/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################

##############################################################################
#------------------------------------------------ Nivel 200 m
'set lev 200'

#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrdprs'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrdprs'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 200 Hpa (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/200/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################

##############################################################################
#------------------------------------------------ Nivel 100 m
'set lev 100'

#------------------------------------------------ Comienza programacion
j=1

while (j <=87)
#------------------------------------------------
'set grads off'
'c'
'set t 'j''
'set gxout shaded'
'color -30 15 5 -kind darkmagenta->mediumslateblue->steelblue->cornflowerblue->aqua->aliceblue->lightyellow->khaki->yellow->gold'
'd ugrdprs'
'cbar'
'set ccolor 15'
'set gxout contour'
'set clab forced'
'set ccolor 1'
'set cmin -30'
'set cmax 15'
'set cint 5'
'd ugrdprs'
#------------ marcadores de tiempo
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
'draw title Componente del viento en U & V a 100 Hpa (m/s)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_007/100/'j'.png x1920 y1440'
#-------------------------------------------------
j=j+1
#-------------------------------------------------
endwhile

#########################################################################

'quit'
