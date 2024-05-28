#=======================================================================================
#=======================================================================================
#======================= CONVERGENCIA Y DIVERGENCIA GENERAL ============================
#=======================================================================================
#=======================================================================================
#Abre el ctl asociado.
'open /home/arw/trabajo/grads/salida.ctl'

'reset graphics'
'set mpdset hires'
'set display color white'

#Script CONVERGENCIA Y DIVERGENCIA A 10 MB
'c'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -80 80 2 -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'rh=rhprs'
't=tmpprs'
'tc=t-273.16'
'td = tc-((14.55+0.114*tc)*(1-0.01*rh) + pow((2.5+0.007*tc)*(1-0.01*rh),3) + (15.9+0.117*tc)*pow((1-0.01*rh),14))' 
'vapr = 6.112*exp((17.67*td)/(td+243.5))' 
'e = vapr*1.001+(lev-100)/900*0.0034' 
'mixr = 0.62197*(e/(lev-e))*1000' 
'mconv = (-1)*hdivg(ugrd10m*mixr,vgrd10m*mixr)*1e4' 
'd mconv' 
'set gxout contour'
#'set clab forced'
'set ccolor 15'
#'set cmin -80'
#'set cmax 80'
#'set cint 5'
#'d mconv'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarnskip 5'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Divergencia (-) y Convergencia (+) & Lineas de corriente a 10m (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_008/10m/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script CONVERGENCIA Y DIVERGENCIA A 1000 MB
'c'
'set lev 1000'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -80 80 2 -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'rh=rhprs'
't=tmpprs'
'tc=t-273.16'
'td = tc-((14.55+0.114*tc)*(1-0.01*rh) + pow((2.5+0.007*tc)*(1-0.01*rh),3) + (15.9+0.117*tc)*pow((1-0.01*rh),14))' 
'vapr = 6.112*exp((17.67*td)/(td+243.5))' 
'e = vapr*1.001+(lev-100)/900*0.0034' 
'mixr = 0.62197*(e/(lev-e))*1000' 
'mconv = (-1)*hdivg(ugrdprs*mixr,vgrdprs*mixr)*1e4' 
'd mconv' 
'set gxout contour'
#'set clab forced'
'set ccolor 15'
#'set cmin -80'
#'set cmax 80'
#'set cint 5'
#'d mconv'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarnskip 5'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Divergencia (-) y Convergencia (+) & Lineas de corriente a 1000 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_008/1000/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script CONVERGENCIA Y DIVERGENCIA A 850 MB
'c'
'set lev 850'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -80 80 2 -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'rh=rhprs'
't=tmpprs'
'tc=t-273.16'
'td = tc-((14.55+0.114*tc)*(1-0.01*rh) + pow((2.5+0.007*tc)*(1-0.01*rh),3) + (15.9+0.117*tc)*pow((1-0.01*rh),14))' 
'vapr = 6.112*exp((17.67*td)/(td+243.5))' 
'e = vapr*1.001+(lev-100)/900*0.0034' 
'mixr = 0.62197*(e/(lev-e))*1000' 
'mconv = (-1)*hdivg(ugrdprs*mixr,vgrdprs*mixr)*1e4' 
'd mconv' 
'set gxout contour'
#'set clab forced'
'set ccolor 15'
#'set cmin -80'
#'set cmax 80'
#'set cint 5'
#'d mconv'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarnskip 5'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Divergencia (-) y Convergencia (+) & Lineas de corriente a 850 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_008/850/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script CONVERGENCIA Y DIVERGENCIA A 700 MB
'c'
'set lev 700'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -40 40 2 -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'rh=rhprs'
't=tmpprs'
'tc=t-273.16'
'td = tc-((14.55+0.114*tc)*(1-0.01*rh) + pow((2.5+0.007*tc)*(1-0.01*rh),3) + (15.9+0.117*tc)*pow((1-0.01*rh),14))' 
'vapr = 6.112*exp((17.67*td)/(td+243.5))' 
'e = vapr*1.001+(lev-100)/900*0.0034' 
'mixr = 0.62197*(e/(lev-e))*1000' 
'mconv = (-1)*hdivg(ugrdprs*mixr,vgrdprs*mixr)*1e4' 
'd mconv' 
'set gxout contour'
#'set clab forced'
'set ccolor 15'
#'set cmin -80'
#'set cmax 80'
#'set cint 5'
#'d mconv'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarnskip 5'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Divergencia (-) y Convergencia (+) & Lineas de corriente a 700 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_008/700/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script CONVERGENCIA Y DIVERGENCIA A 500 MB
'c'
'set lev 500'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -20 20 1 -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'rh=rhprs'
't=tmpprs'
'tc=t-273.16'
'td = tc-((14.55+0.114*tc)*(1-0.01*rh) + pow((2.5+0.007*tc)*(1-0.01*rh),3) + (15.9+0.117*tc)*pow((1-0.01*rh),14))' 
'vapr = 6.112*exp((17.67*td)/(td+243.5))' 
'e = vapr*1.001+(lev-100)/900*0.0034' 
'mixr = 0.62197*(e/(lev-e))*1000' 
'mconv = (-1)*hdivg(ugrdprs*mixr,vgrdprs*mixr)*1e4' 
'd mconv' 
'set gxout contour'
#'set clab forced'
'set ccolor 15'
#'set cmin -80'
#'set cmax 80'
#'set cint 5'
#'d mconv'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarnskip 5'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Divergencia (-) y Convergencia (+) & Lineas de corriente a 500 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_008/500/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script CONVERGENCIA Y DIVERGENCIA A 400 MB
'c'
'set lev 400'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -10 10 0.5 -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'rh=rhprs'
't=tmpprs'
'tc=t-273.16'
'td = tc-((14.55+0.114*tc)*(1-0.01*rh) + pow((2.5+0.007*tc)*(1-0.01*rh),3) + (15.9+0.117*tc)*pow((1-0.01*rh),14))' 
'vapr = 6.112*exp((17.67*td)/(td+243.5))' 
'e = vapr*1.001+(lev-100)/900*0.0034' 
'mixr = 0.62197*(e/(lev-e))*1000' 
'mconv = (-1)*hdivg(ugrdprs*mixr,vgrdprs*mixr)*1e4' 
'd mconv' 
'set gxout contour'
#'set clab forced'
'set ccolor 15'
#'set cmin -80'
#'set cmax 80'
#'set cint 5'
#'d mconv'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarnskip 5'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Divergencia (-) y Convergencia (+) & Lineas de corriente a 400 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_008/400/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script CONVERGENCIA Y DIVERGENCIA A 300 MB
'c'
'set lev 300'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -5 5 0.1 -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'rh=rhprs'
't=tmpprs'
'tc=t-273.16'
'td = tc-((14.55+0.114*tc)*(1-0.01*rh) + pow((2.5+0.007*tc)*(1-0.01*rh),3) + (15.9+0.117*tc)*pow((1-0.01*rh),14))' 
'vapr = 6.112*exp((17.67*td)/(td+243.5))' 
'e = vapr*1.001+(lev-100)/900*0.0034' 
'mixr = 0.62197*(e/(lev-e))*1000' 
'mconv = (-1)*hdivg(ugrdprs*mixr,vgrdprs*mixr)*1e4' 
'd mconv' 
'set gxout contour'
#'set clab forced'
'set ccolor 15'
#'set cmin -80'
#'set cmax 80'
#'set cint 5'
#'d mconv'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarnskip 5'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Divergencia (-) y Convergencia (+) & Lineas de corriente a 300 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_008/300/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script CONVERGENCIA Y DIVERGENCIA A 200 MB
'c'
'set lev 200'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -1 1 0.1 -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'rh=rhprs'
't=tmpprs'
'tc=t-273.16'
'td = tc-((14.55+0.114*tc)*(1-0.01*rh) + pow((2.5+0.007*tc)*(1-0.01*rh),3) + (15.9+0.117*tc)*pow((1-0.01*rh),14))' 
'vapr = 6.112*exp((17.67*td)/(td+243.5))' 
'e = vapr*1.001+(lev-100)/900*0.0034' 
'mixr = 0.62197*(e/(lev-e))*1000' 
'mconv = (-1)*hdivg(ugrdprs*mixr,vgrdprs*mixr)*1e4' 
'd mconv' 
'set gxout contour'
#'set clab forced'
'set ccolor 15'
#'set cmin -80'
#'set cmax 80'
#'set cint 5'
#'d mconv'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarnskip 1'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Divergencia (-) y Convergencia (+) & Lineas de corriente a 200 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_008/200/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

#Script CONVERGENCIA Y DIVERGENCIA A 100 MB
'c'
'set lev 100'
'set t 1'
t = 1
while (t <= 87)
'set grads off'
'set t 't''
'set gxout shaded'
'color -0.05 0.05 0.01 -kind darkgreen->yellowgreen->powderblue->paleturquoise->cornsilk->gold->darkorange->chocolate->red'
'rh=rhprs'
't=tmpprs'
'tc=t-273.16'
'td = tc-((14.55+0.114*tc)*(1-0.01*rh) + pow((2.5+0.007*tc)*(1-0.01*rh),3) + (15.9+0.117*tc)*pow((1-0.01*rh),14))' 
'vapr = 6.112*exp((17.67*td)/(td+243.5))' 
'e = vapr*1.001+(lev-100)/900*0.0034' 
'mixr = 0.62197*(e/(lev-e))*1000' 
'mconv = (-1)*hdivg(ugrdprs*mixr,vgrdprs*mixr)*1e4' 
'd mconv' 
'set gxout contour'
#'set clab forced'
'set ccolor 15'
#'set cmin -80'
#'set cmax 80'
#'set cint 5'
#'d mconv'
'set ccolor 15'
'set gxout stream'
'd ugrd10m*1.94;vgrd10m*1.94'
'cbarnskip 1'
'q time'
x1=sublin(result,1)
t1=subwrd(x1,3)
t2=subwrd(x1,5)
'draw title Divergencia (-) y Convergencia (+) & Lineas de corriente a 100 Hpa (Kt)\Valido para 't1' '
'printim /home/arw/trabajo/grads_temp_008/100/'t'.png x1920 y1440'
'c'
t = t+1
endwhile

'quit'
