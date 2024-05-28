#=======================================================================================
#=======================================================================================
#===================== INDICE DE CHANDLER PARA RIESGO DE INCENDIOS  ====================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

#Script PARA PRECIPITACION TOTAL EN CADA PERIODO
#'set xsize 1920 1080'
'set lat 12.6 14.8'
'set lon 269.2 273.1'
'set mpdset nmap'
'set display color white'
'set gxout shaded'
'c'
#========================================================
#=============== COMENZANDO PROGRAMACION ================
#========================================================

#********************************************************
'set t 1'
t = 1
while (t <= 88)
'cbi=(((110 - 1.373 * rh2m) - 0.54 * (10.2 - (tmp2m-273.15))) * (124 * (pow(10,(-0.0142 * rh2m)))))/60'
'set gxout shaded'
'set clevs 50 75 90 97.5'
'set ccols 10 11 7 8 2'
'd cbi'
'cbarn'
'set gxout contour'
'set clevs 50 75 90 97.5'
'set ccols 10 11 7 8 2'
'd cbi'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
tmp2m=subwrd(x1,5)
titi=t-1
'draw shp ESA_CA_wgs84.shp'
'draw title Chandler Burning Index para Riesgo de Incendio\Valido para 't1' :: F'titi' Base 00Z'
#'draw string 4.5 0.2 WRF El Salvador  5 KM'
'printim /home/arw/trabajo/grads_temp_002/'t'.png x1920 y1440'
'c'
t= t+1
'set t 't''
endwhile
#********************************************************
'quit'
