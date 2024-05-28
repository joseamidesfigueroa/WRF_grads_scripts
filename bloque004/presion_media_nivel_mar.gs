#=======================================================================================
#=======================================================================================
#========================================== PMSL =======================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

# Script para temperatura
'reset graphics'
'set mpdset hires'
'set display color white'
'set map 15'
'c'
t = 1
titi = 0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color 970 1040 1 -kind black->orangered->orangered->lemonchiffon->azure->midnightblue->darkviolet->black'
'd prmslmsl/100'
'cbarnskip 2'
'set line 1'
#'draw shp gadm36_MEX_1.shp'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set clab masked'
'set ccolor 1'
'set cmin 970'
'set cmax 1040'
'set cint 1'
'd prmslmsl/100'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Presion media al nivel del mar (Hpa)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_004/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
