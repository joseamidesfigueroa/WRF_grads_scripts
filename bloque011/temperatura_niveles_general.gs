#=======================================================================================
#=======================================================================================
#================================ TEMPERATURA GENERAL ==================================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

'reset graphics'
'set mpdset hires'
'set display color white'

#Script EXPERIMENTAL PARA TEMPERATURA A 1000 MB
'c'
'set lev 1000'
'set t 1'
t = 1
titi=0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -levs -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 16 18 20 24 28 32 36 40 44 48 -kind cornflowerblue->lightskyblue->cadetblue->plum->thistle->lavender->slategray->lightslategray->lightsteelblue->whitesmoke->azure->mintcream->ivory->aliceblue->lightgray->paleturquoise->turquoise->aquamarine->lightgreen->lightcyan->mediumspringgreen->green->palegreen->peachpuff->burlywood->goldenrod->darkgoldenrod->sienna->red->maroon->saddlebrown->dimgray->magenta->darkmagenta->darkviolet'
'd tmpprs-273.15'
'set ccolor 15'
'set gxout stream'
'd tmpprs-273.15'
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
'draw title Temperatura (Celsius) en 1000 Hpa\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_011/1000/'t'.png x1920 y1440'
'c'
titi=titi+1
t = t+1
endwhile 

#Script EXPERIMENTAL PARA TEMPERATURA A 850 MB
'c'
'set lev 850'
'set t 1'
t = 1
titi=0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -levs -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 16 18 20 24 28 32 36 40 44 48 -kind cornflowerblue->lightskyblue->cadetblue->plum->thistle->lavender->slategray->lightslategray->lightsteelblue->whitesmoke->azure->mintcream->ivory->aliceblue->lightgray->paleturquoise->turquoise->aquamarine->lightgreen->lightcyan->mediumspringgreen->green->palegreen->peachpuff->burlywood->goldenrod->darkgoldenrod->sienna->red->maroon->saddlebrown->dimgray->magenta->darkmagenta->darkviolet'
'd tmpprs-273.15'
'set ccolor 15'a 2 metros 
'set gxout stream'
'd tmpprs-273.15'
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
'draw title Temperatura (Celsius) en 850 Hpa\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_011/850/'t'.png x1920 y1440'
'c'
titi=titi+1
t = t+1
endwhile 

#Script EXPERIMENTAL PARA TEMPERATURA A 700 MB
'c'
'set lev 700'
'set t 1'
t = 1
titi=0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -levs -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 16 18 20 24 28 32 36 40 44 48 -kind cornflowerblue->lightskyblue->cadetblue->plum->thistle->lavender->slategray->lightslategray->lightsteelblue->whitesmoke->azure->mintcream->ivory->aliceblue->lightgray->paleturquoise->turquoise->aquamarine->lightgreen->lightcyan->mediumspringgreen->green->palegreen->peachpuff->burlywood->goldenrod->darkgoldenrod->sienna->red->maroon->saddlebrown->dimgray->magenta->darkmagenta->darkviolet'
'd tmpprs-273.15'
'set ccolor 15'
'set gxout stream'
'd tmpprs-273.15'
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
'draw title Temperatura (Celsius) en 700 Hpa\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_011/700/'t'.png x1920 y1440'
'c'
titi=titi+1
t = t+1
endwhile 

#Script EXPERIMENTAL PARA TEMPERATURA A 500 MB
'c'
'set lev 500'
'set t 1'
t = 1
titi=0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -levs -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 16 18 20 24 28 32 36 40 44 48 -kind cornflowerblue->lightskyblue->cadetblue->plum->thistle->lavender->slategray->lightslategray->lightsteelblue->whitesmoke->azure->mintcream->ivory->aliceblue->lightgray->paleturquoise->turquoise->aquamarine->lightgreen->lightcyan->mediumspringgreen->green->palegreen->peachpuff->burlywood->goldenrod->darkgoldenrod->sienna->red->maroon->saddlebrown->dimgray->magenta->darkmagenta->darkviolet'
'd tmpprs-273.15'
'set ccolor 15'
'set gxout stream'
'd tmpprs-273.15'
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
'draw title Temperatura (Celsius) en 500 Hpa\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_011/500/'t'.png x1920 y1440'
'c'
titi=titi+1
t = t+1
endwhile 

#Script EXPERIMENTAL PARA TEMPERATURA A 400 MB
'c'
'set lev 400'
'set t 1'
t = 1
titi=0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -levs -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 16 18 20 24 28 32 36 40 44 48 -kind cornflowerblue->lightskyblue->cadetblue->plum->thistle->lavender->slategray->lightslategray->lightsteelblue->whitesmoke->azure->mintcream->ivory->aliceblue->lightgray->paleturquoise->turquoise->aquamarine->lightgreen->lightcyan->mediumspringgreen->green->palegreen->peachpuff->burlywood->goldenrod->darkgoldenrod->sienna->red->maroon->saddlebrown->dimgray->magenta->darkmagenta->darkviolet'
'd tmpprs-273.15'
'set ccolor 15'
'set gxout stream'
'd tmpprs-273.15'
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
'draw title Temperatura (Celsius) en 400 Hpa\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_011/400/'t'.png x1920 y1440'
'c'
titi=titi+1
t = t+1
endwhile 

#Script EXPERIMENTAL PARA TEMPERATURA A 300 MB
'c'
'set lev 300'
'set t 1'
t = 1
titi=0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -levs -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 16 18 20 24 28 32 36 40 44 48 -kind cornflowerblue->lightskyblue->cadetblue->plum->thistle->lavender->slategray->lightslategray->lightsteelblue->whitesmoke->azure->mintcream->ivory->aliceblue->lightgray->paleturquoise->turquoise->aquamarine->lightgreen->lightcyan->mediumspringgreen->green->palegreen->peachpuff->burlywood->goldenrod->darkgoldenrod->sienna->red->maroon->saddlebrown->dimgray->magenta->darkmagenta->darkviolet'
'd tmpprs-273.15'
'set ccolor 15'
'set gxout stream'
'd tmpprs-273.15'
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
'draw title Temperatura (Celsius) en 300 Hpa\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_011/300/'t'.png x1920 y1440'
'c'
titi=titi+1
t = t+1
endwhile  

#Script TEMPERATURA A 200 MB
'c'
'set lev 200'
'set t 1'
t = 1
titi=0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -levs -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 16 18 20 24 28 32 36 40 44 48 -kind cornflowerblue->lightskyblue->cadetblue->plum->thistle->lavender->slategray->lightslategray->lightsteelblue->whitesmoke->azure->mintcream->ivory->aliceblue->lightgray->paleturquoise->turquoise->aquamarine->lightgreen->lightcyan->mediumspringgreen->green->palegreen->peachpuff->burlywood->goldenrod->darkgoldenrod->sienna->red->maroon->saddlebrown->dimgray->magenta->darkmagenta->darkviolet'
'd tmpprs-273.15'
'set ccolor 15'
'set gxout stream'
'd tmpprs-273.15'
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
'draw title Temperatura (Celsius) en 200 Hpa\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_011/200/'t'.png x1920 y1440'
'c'
titi=titi+1
t = t+1
endwhile 

#Script TEMPERATURA A 100 MB
'c'
'set lev 100'
'set t 1'
t = 1
titi=0
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -levs -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0 2 4 6 8 10 12 16 18 20 24 28 32 36 40 44 48 -kind cornflowerblue->lightskyblue->cadetblue->plum->thistle->lavender->slategray->lightslategray->lightsteelblue->whitesmoke->azure->mintcream->ivory->aliceblue->lightgray->paleturquoise->turquoise->aquamarine->lightgreen->lightcyan->mediumspringgreen->green->palegreen->peachpuff->burlywood->goldenrod->darkgoldenrod->sienna->red->maroon->saddlebrown->dimgray->magenta->darkmagenta->darkviolet'
'd tmpprs-273.15'
'set ccolor 15'
'set gxout stream'
'd tmpprs-273.15'
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
'draw title Temperatura (Celsius) en 100 Hpa\Valido para 't1' : F'titi''
'printim /home/arw/trabajo/grads_temp_011/100/'t'.png x1920 y1440'
'c'
titi=titi+1
t = t+1
endwhile 

'quit'
