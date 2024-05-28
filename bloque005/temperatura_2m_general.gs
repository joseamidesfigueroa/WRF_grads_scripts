#=======================================================================================
#=======================================================================================
#============================== TEMPERATURA A 2 METROS =================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

# Script para temperatura
'reset graphics'
'set mpdset hires'
'set display color white'
'c'
t = 1
titi = 0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -levs -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 16 18 20 24 28 32 36 40 44 48 -kind cornflowerblue->lightskyblue->cadetblue->plum->thistle->lavender->slategray->lightslategray->lightsteelblue->whitesmoke->azure->mintcream->ivory->aliceblue->lightgray->paleturquoise->turquoise->aquamarine->lightgreen->lightcyan->mediumspringgreen->green->palegreen->peachpuff->burlywood->goldenrod->darkgoldenrod->sienna->red->maroon->saddlebrown->dimgray->magenta->darkmagenta->darkviolet'
'd tmp2m-273.15'
'cbarnskip 2'
'set line 1'
'draw shp gadm36_MEX_1.shp'
'q time'
x1=sublin(result,1)
'set gxout contour'
'set ccolor 0'
'd tmp2m-273.15'
t1=subwrd(x1,3)
te2=subwrd(x1,5)
'draw title Temperatura a 2 metros (Celsius)\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_005/'t'.png x1920 y1440'
'c'
t= t+1
titi=titi+1
endwhile

'quit'
