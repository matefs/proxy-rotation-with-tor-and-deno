# proxy-rotation-with-tor-and-deno

##  request script 
- Emulate the browser using some specific headers 


```sudo apt install proxychains4 tor ```

### Loop request: 
``` 

while true; do 
  sudo killall -HUP tor; 
  proxychains4 -f minha_lista.conf deno run -A kabum.ts; 
  sleep 5; 
done

```
