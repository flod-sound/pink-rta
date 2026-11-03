const https=require('https'),fs=require('fs'),path=require('path'),os=require('os');
const opts={key:fs.readFileSync(path.join(__dirname,'key.pem')),cert:fs.readFileSync(path.join(__dirname,'cert.pem'))};
https.createServer(opts,(req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  fs.createReadStream(path.join(__dirname,'index.html')).pipe(res);
}).listen(8443,'0.0.0.0',()=>{
  for(const l of Object.values(os.networkInterfaces()).flat())
    if(l.family==='IPv4'&&!l.internal)console.log('폰 사파리 주소:  https://'+l.address+':8443');
});
