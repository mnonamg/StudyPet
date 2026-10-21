/* ============ CONFIG ============ */
var CFG={
  key:"pu_bilingual",
  sessionMin:25, minXpSec:600, speed:1, weights:[3,2,1], reviewDays:3,
  colors:["#e5484d","#3b82f6","#12a36b","#a855f7","#f08a1c","#0891b2","#db2777","#65a30d"],
  topicCount:{r:4,m:5}, stages:["🥚","🐣","🐱","🦁"], stageAtLevel:[1,2,4,7],
  fedLossPerHour:3, joyLossPerHour:2, sessionJoy:25
};

/* ============ KAMUS DWI-BAHASA (PROFESIONAL) ============ */
var langData = {
  ms: {
    presets:{r:["Bahasa Melayu","Bahasa Inggeris","Matematik","Sains","Pendidikan Islam","Pendidikan Moral","Sejarah","Bahasa Cina","Bahasa Tamil","Pendidikan Jasmani","Pendidikan Seni","Reka Bentuk dan Teknologi"],l:["Bahasa Melayu","Bahasa Inggeris","Matematik","Sains","Sejarah","Geografi","Pendidikan Islam","Pendidikan Moral","Reka Bentuk dan Teknologi","Bahasa Cina","Bahasa Tamil","Bahasa Arab"],u:["Bahasa Melayu","Bahasa Inggeris","Matematik","Sejarah","Pendidikan Islam","Pendidikan Moral","Sains","Fizik","Kimia","Biologi","Matematik Tambahan","Prinsip Perakaunan","Ekonomi","Geografi","Kesusasteraan","Bahasa Arab","Bahasa Cina"]},
    core:["Bahasa Melayu","Bahasa Inggeris","Matematik"],
    exams:{r:["Peperiksaan Akhir Tahun","Peperiksaan Pertengahan Tahun","Ujian Bulanan"],m:["SPM","Peperiksaan Akhir Tahun","Peperiksaan Pertengahan Tahun","Ujian Bulanan"]},
    levels:["Pelajar Baharu","Pelajar Dedikasi","Pelajar Cemerlang","Pakar Subjek"],
    foods:[{id:"apple",e:"🍎",n:"Epal",c:5,fed:20,joy:0},{id:"burger",e:"🍔",n:"Burger",c:15,fed:50,joy:0},{id:"cake",e:"🍰",n:"Kek",c:25,fed:30,joy:30}],
    gear:[{id:"hat",e:"🎩",n:"Topi",c:60},{id:"glasses",e:"👓",n:"Cermin Mata",c:80},{id:"bow",e:"🎀",n:"Reben",c:60},{id:"crown",e:"👑",n:"Mahkota",c:200}]
  },
  en: {
    presets:{r:["Malay","English","Mathematics","Science","Islamic Education","Moral Education","History","Chinese","Tamil","Physical Education","Art","Design and Technology"],l:["Malay","English","Mathematics","Science","History","Geography","Islamic Education","Moral Education","Design and Technology","Chinese","Tamil","Arabic"],u:["Malay","English","Mathematics","History","Islamic Education","Moral Education","Science","Physics","Chemistry","Biology","Additional Mathematics","Principles of Accounting","Economics","Geography","Literature","Arabic","Chinese"]},
    core:["Malay","English","Mathematics"],
    exams:{r:["Final Year Exam","Mid-Year Exam","Monthly Assessment"],m:["SPM","Final Year Exam","Mid-Year Exam","Monthly Assessment"]},
    levels:["Novice Learner","Dedicated Student","Academic Achiever","Subject Expert"],
    foods:[{id:"apple",e:"🍎",n:"Apple",c:5,fed:20,joy:0},{id:"burger",e:"🍔",n:"Burger",c:15,fed:50,joy:0},{id:"cake",e:"🍰",n:"Cake",c:25,fed:30,joy:30}],
    gear:[{id:"hat",e:"🎩",n:"Hat",c:60},{id:"glasses",e:"👓",n:"Glasses",c:80},{id:"bow",e:"🎀",n:"Bow",c:60},{id:"crown",e:"👑",n:"Crown",c:200}]
  }
};

var TXT={
  ms:{
    btn_start:"MULA SEKARANG",
    ob_w:"Selamat Datang 👋", ob_sub:"Sila lengkapkan butiran ini. Ia hanya mengambil masa kurang dari seminit.", p_alt:"Gambar profil (Pilihan).",
    nm:"Nama ", nm_p:"Contoh: Aiman", ty:"Peringkat Pendidikan", ty_r:"Sekolah Rendah", ty_m:"Sekolah Menengah",
    l_r:"Tahun berapakah anda?", l_m:"Tingkatan berapakah anda?", lv_r:"Tahun ", lv_m:"Tingkatan ",
    sb_t:"Subjek Pilihan Anda", sb_s:"Sila pilih subjek anda. Jika tiada dalam senarai, anda boleh menambahnya di bawah.", sb_p:"Tambah subjek lain", add:"Tambah",
    lv_t:"Tahap Penguasaan & Sasaran", lv_s:"Subjek yang memerlukan lebih perhatian akan diberikan slot ulangkaji yang lebih.", lw:"Lemah", la:"Sederhana", ls:"Kuat", hr_q:"Berapakah sasaran tempoh ulangkaji harian anda?", hr:"jam",
    ex_t:"Tarikh Peperiksaan", dt:"Tarikh", dt_s:"Tarikh ini adalah anggaran. Sila rujuk takwim rasmi sekolah anda.",
    bk:"Kembali", nx:"Seterusnya", gn:"Jana Jadual",
    e_n:"Sila masukkan nama dan pilih peringkat pendidikan anda.", e_l:"Sila pilih tahun atau tingkatan anda.", e_s:"Sila pilih sekurang-kurangnya satu subjek.", e_x:"Sila tetapkan tarikh peperiksaan anda.", d_gn:"Selesai! Jadual pembelajaran anda sedia untuk digunakan 🎉",
    dl:"hari ke", td:"Hari ini:", dn:"selesai",
    md:"Tahniah, {n}! Semua tugasan hari ini telah selesai. Sila berehat. 🎉", ms:"Tekan 'Mula' pada tugasan pilihan anda. Selepas pemasa tamat, tentukan tahap kefahaman anda bagi topik tersebut.",
    ts:"Tugasan Hari Ini", rev:"Ulangkaji: ", min:"minit", dc:"Selesai ✓", st:"Mula ▶", tk:"Tandakan Selesai Tanpa Pemasa (+5 XP)",
    ws:"Agihan jadual mingguan. Subjek yang lemah akan menerima keutamaan masa yang lebih.", rd:"Hari Rehat 😴",
    lvl:"Tahap", msad:"Haiwan peliharaan anda lapar 🥺 Sila beri makanan.", mbor:"Haiwan peliharaan anda bosan 😴 Mari mulakan sesi ulangkaji.", mhap:"Ceria 😄",
    ful:"Tahap Kekenyangan", joy:"Tahap Kegembiraan", fd:"Beri Makanan", gr:"Aksesori", wr:"Pakai", uwr:"Tanggalkan",
    pm:"Haiwan peliharaan anda tidak akan mati, tetapi ia akan berasa lapar dan bosan jika diabaikan. Lakukan sesi ulangkaji untuk menceriakannya semula.",
    str:"rentetan (streak)", wk:"jam minggu ini", sh:"Senarai Subjek (Tekan untuk lihat topik)", mns:"minit telah dipelajari",
    at:"Tambah topik baharu", a14:"Aktiviti 14 Hari Terkini", br:"Tetapan Semula Profil",
    aq:"Sesi tamat ({m} minit). Adakah anda telah menguasai topik ini?", as:"Jawapan anda akan menentukan status topik ini dan kekerapannya muncul di dalam jadual.", anx:"Sesi kurang daripada 10 minit tidak melayakkan anda menerima XP.",
    ay:"Telah Dikuasai", ah:"Sederhana", an:"Belum Menguasai",
    tp:"Jeda", tr:"Sambung", tst:"Tamatkan Sesi", tmn:"Sesi minimum 10 minit diperlukan untuk meraih ganjaran XP.",
    ptk:"+5 XP berjaya diraih (Sesi tanpa pemasa).", pnx:"Tiada ganjaran XP diberikan. Sesi terlalu singkat.", px:"+{x} XP! Haiwan peliharaan anda juga gembira 🎉", py:"Yummy! ", pw:"Haiwan peliharaan anda kini memakai ",
    cr:"Adakah anda pasti untuk memadam semua rekod dan bermula semula?", ei:"Sila pilih format imej yang sah.", eio:"Gagal memuat naik imej.",
    day:["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"], stn:["Belum Bermula","Sedang Ulangkaji","Telah Dikuasai"], ch:"Bab ",
    h:"Utama", w:"Jadual", p:"Peliharaan", pg:"Kemajuan", prof:"Jadual Pembelajaran "
  },
  en:{
    btn_start:"LET’S GET STARTED",
    ob_w:"Welcome 👋", ob_sub:"Please complete your profile. This will take less than a minute.", p_alt:"Profile picture (Optional).",
    nm:"First Name ", nm_p:"Example: Aiman", ty:"Education Level", ty_r:"Primary School", ty_m:"Secondary School",
    l_r:"Current Year?", l_m:"Current Form?", lv_r:"Year ", lv_m:"Form ",
    sb_t:"Select Your Subjects", sb_s:"Tap to select. If your subject is not listed, please add it below.", sb_p:"Add a custom subject", add:"Add",
    lv_t:"Proficiency & Commitment", lv_s:"Subjects marked as 'Needs Work' will be prioritized in your schedule.", lw:"Needs Work", la:"Average", ls:"Excellent", hr_q:"What is your daily study goal?", hr:"hours",
    ex_t:"Target Examination", dt:"Target Date", dt_s:"This is an estimated date. Please verify with your school's official academic calendar.",
    bk:"Back", nx:"Next", gn:"Generate Schedule",
    e_n:"Please provide your name and select an education level.", e_l:"Please select your current academic year or form.", e_s:"Please select at least one subject to proceed.", e_x:"Please set your target examination date.", d_gn:"Success! Your personalized study schedule is ready 🎉",
    dl:"days until", td:"Today:", dn:"completed",
    md:"Outstanding work, {n}! All daily tasks are complete. Enjoy your rest. 🎉", ms:"Select 'Start' to begin a focus session. Once completed, you will be prompted to evaluate your understanding.",
    ts:"Today's Tasks", rev:"Review: ", min:"mins", dc:"Completed ✓", st:"Start ▶", tk:"Mark as Done (No Timer, +5 XP)",
    ws:"Weekly distribution. Priority is given to subjects requiring improvement.", rd:"Rest Day 😴",
    lvl:"Level", msad:"Your pet is hungry 🥺 Treat it to some food.", mbor:"Your pet is bored 😴 Let's start a quick study session.", mhap:"Joyful 😄",
    ful:"Fullness Level", joy:"Happiness Level", fd:"Pantry", gr:"Accessories", wr:"Equip", uwr:"Unequip",
    pm:"Your pet is immortal, but it requires your study sessions to stay fed and happy. Keep learning to maintain its mood!",
    str:"day streak", wk:"hours this week", sh:"Your Subjects (Tap to expand topics)", mns:"minutes studied",
    at:"Add a new topic", a14:"Recent 14-Day Activity", br:"Reset Profile",
    aq:"Session complete ({m} minutes). Have you mastered this topic?", as:"Your assessment helps the system optimize your future review schedule.", anx:"Sessions under 10 minutes do not qualify for XP rewards.",
    ay:"Mastered", ah:"Still Reviewing", an:"Needs Work",
    tp:"Pause", tr:"Resume", tst:"End Session", tmn:"A minimum of 10 focused minutes is required to earn XP.",
    ptk:"+5 XP credited (Manual completion).", pnx:"No XP awarded. The session was too brief.", px:"+{x} XP earned! Your pet is delighted 🎉", py:"Yummy! ", pw:"Your pet is now wearing ",
    cr:"Are you sure you want to permanently delete all data and start over?", ei:"Please select a valid image file.", eio:"Failed to process the image.",
    day:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], stn:["Not Started","In Progress","Mastered"], ch:"Chapter ",
    h:"Dashboard", w:"Schedule", p:"My Pet", pg:"Insights", prof:"Study Plan for "
  }
};

/* ============ ASAS ============ */
var EM=[[/tambahan|add|mathem/i,"📐"],[/fizik|physics/i,"⚛️"],[/kimia|chemistry/i,"🧪"],[/biologi|biology|sains|science/i,"🧬"],[/melayu|malay|susasteraan|literature/i,"📖"],[/inggeris|english/i,"🔤"],[/sejarah|history/i,"🏛️"],[/geografi|geography/i,"🌏"],[/islam|arab/i,"🕌"],[/moral/i,"🤝"],[/akaun|account/i,"🧾"],[/ekonomi|econom/i,"📊"],[/jasmani|physical/i,"🏃"],[/seni|art/i,"🎨"],[/cina|tamil|chinese/i,"🈶"],[/reka|teknologi|design/i,"🛠️"]];
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function emo(n){for(var i=0;i<EM.length;i++)if(EM[i][0].test(n))return EM[i][1];return "📘"}
function dk(d){d=d||new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
function pop(t){var p=document.createElement("div");p.className="pop";p.textContent=t;document.body.appendChild(p);setTimeout(function(){p.remove()},1800)}
function tt(k){return TXT[ui.lang][k]}
function ld(k){return langData[ui.lang][k]}

var S=null,ui={tab:"home",lang:"ms",ob:{st:-1,name:"",type:"",lvl:0,subs:[],hrs:2,ex:"",date:"",pre:0,photo:""},tm:null,open:null},iv=null;
function save(){try{localStorage.setItem(CFG.key,JSON.stringify(S))}catch{/* ignore */}}
function load(){try{ui.lang=localStorage.getItem(CFG.key+"_lang")||"ms"}catch{/* ignore */}try{S=JSON.parse(localStorage.getItem(CFG.key))}catch{S=null}if(S&&!S.subs)S=null}
function lvl(){return 1+Math.floor(S.totalXp/100)}
function addXp(n){S.xp+=n;S.totalXp+=n}
function sub(k){return S.subs.filter(function(s){return s.k==k})[0]}
function col(k){return CFG.colors[S.subs.indexOf(sub(k))%8]}
function pct(k){var a=S.topics[k];if(!a.length)return 0;var s=0;a.forEach(function(x){s+=x[1]});return Math.round(s/(a.length*2)*100)}
function streak(){var n=0,d=new Date();if(!S.log[dk(d)])d.setDate(d.getDate()-1);while((S.log[dk(d)]||0)>=1){n++;d.setDate(d.getDate()-1)}return n}
function weekHrs(){var s=0,d=new Date();for(var i=0;i<7;i++){s+=S.log[dk(d)]||0;d.setDate(d.getDate()-1)}return (s/60).toFixed(1)}

/* ============ TUGASAN HARI INI ============ */
function seq(){var s=[];for(var r=0;r<3;r++)S.subs.forEach(function(x){if(CFG.weights[x.l]>r)s.push(x.k)});return s}
function ensureToday(){var d=dk();if(S.today&&S.today.d==d)return;var q=seq(),o=Math.floor(Date.now()/864e5)%q.length,tasks=[],seen={};
q=q.slice(o).concat(q.slice(0,o));
q.forEach(function(k){if(seen[k]||tasks.length>=4)return;seen[k]=1;var a=S.topics[k],i=-1,rev=0,j;
for(j=0;j<a.length;j++)if(a[j][1]==2&&Date.now()-(a[j][2]||0)>CFG.reviewDays*864e5){i=j;rev=1;break}
if(i<0)for(j=0;j<a.length;j++)if(a[j][1]<2){i=j;break}
if(i>-1)tasks.push({k:k,i:i,r:rev,done:0})});
S.today={d:d,tasks:tasks};save()}

/* ============ TIMER ============ */
function startTm(i){ui.tm={i:i,el:0,last:Date.now(),run:true,stage:"run",dur:CFG.sessionMin*60000};clearInterval(iv);iv=setInterval(tick,500);render()}
function tick(){var m=ui.tm;if(!m||m.stage!="run")return;var n=Date.now();if(m.run)m.el+=(n-m.last)*CFG.speed;m.last=n;
if(m.el>=m.dur){m.el=m.dur;m.stage="ask";clearInterval(iv);try{navigator.vibrate&&navigator.vibrate(300)}catch{/* ignore */}render();return}
var c=$("clk");if(c)c.textContent=fmt(m.dur-m.el)}
function fmt(ms){var s=Math.ceil(ms/1000),a=Math.floor(s/60),b=s%60;return (a<10?"0":"")+a+":"+(b<10?"0":"")+b}
function finish(res){var m=ui.tm,t=S.today.tasks[m.i],min=m.el/60000,a=S.topics[t.k][t.i],ok=m.el/1000>=CFG.minXpSec,xp=0,d=dk();
S.log[d]=(S.log[d]||0)+min;S.subjMin[t.k]=(S.subjMin[t.k]||0)+min;
if(ok){xp=Math.floor(min)+(res=="y"?10:res=="h"?5:0);addXp(xp);petTick();S.pet.joy=Math.min(100,S.pet.joy+CFG.sessionJoy);
if(res=="y"){a[1]=2;a[2]=Date.now();t.done=1}else if(res=="h"){a[1]=1;t.done=1}else if(a[1]<1)a[1]=1}
clearInterval(iv);ui.tm=null;save();render();pop(ok?tt('px').replace('{x}',xp):tt('pnx'))}

/* ============ PET ============ */
function petTick(){var p=S.pet,h=Math.min(48,(Date.now()-p.t)/36e5);p.fed=Math.max(0,p.fed-h*CFG.fedLossPerHour);p.joy=Math.max(0,p.joy-h*CFG.joyLossPerHour);p.t=Date.now()}
function stageEmo(){var s=0;CFG.stageAtLevel.forEach(function(v,i){if(lvl()>=v)s=i});return CFG.stages[s]}
function mood(){var p=S.pet;return p.fed<25?tt('msad'):p.joy<25?tt('mbor'):tt('mhap')}

/* ============ SKRIN ============ */
function bar(v,c){return '<div class="bar" style="--c:'+c+'"><i style="width:'+Math.round(v)+'%"></i></div>'}
function prof(){var i=S.photo?'<img src="'+S.photo+'" alt="">':esc(S.name.trim().charAt(0).toUpperCase());
return '<div class="prof"><button class="av" data-a="pic">'+i+'</button><div><div class="t">'+tt('prof')+esc(S.name)+'</div><div class="m">'+(S.type=="r"?tt('lv_r'):tt('lv_m'))+S.lvl+" · "+esc(S.ex)+'</div></div></div>'}
function rHome(){ensureToday();var T=S.today.tasks,d=T.filter(function(x){return x.done}).length,p=T.length?Math.round(d/T.length*100):0,
dl=Math.max(0,Math.ceil((new Date(S.date+"T00:00:00")-new Date())/864e5)),h=prof();
h+='<div class="hero"><div><b>'+dl+'</b><small>'+tt('dl')+' '+esc(S.ex)+'</small><small>'+tt('td')+' '+d+' / '+T.length+' '+tt('dn')+'</small></div><div class="ring"><svg width="78" height="78"><circle cx="39" cy="39" r="32" fill="none" stroke="rgba(255,255,255,.28)" stroke-width="8"/><circle cx="39" cy="39" r="32" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-dasharray="201" stroke-dashoffset="'+(201-2.01*p)+'"/></svg><span>'+p+'%</span></div></div>';
h+='<div class="msg">'+(d==T.length&&T.length?tt('md').replace('{n}',esc(S.name)):tt('ms'))+'</div><h2>'+tt('ts')+'</h2>';
T.forEach(function(x,i){var s=sub(x.k);h+='<div class="card task'+(x.done?" done":"")+'" style="--c:'+col(x.k)+'"><div class="row"><div><div class="t">'+emo(s.n)+" "+(x.r?tt('rev'):"")+esc(S.topics[x.k][x.i][0])+'</div><div class="m">'+esc(s.n)+" · "+CFG.sessionMin+' '+tt('min')+'</div></div>'+
(x.done?'<span class="st s2">'+tt('dc')+'</span>':'<button class="p sm" data-a="start" data-i="'+i+'">'+tt('st')+'</button>')+'</div>'+(x.done?"":'<button class="lk" data-a="tick" data-i="'+i+'">'+tt('tk')+'</button>')+'</div>'});
return h}
function rWeek(){var q=seq(),per=S.hrs>=3?3:2,wp=[[],[],[],[],[],[],[]],n=0,i,dn=tt('day'),nw=(new Date().getDay())%7,h='<p class="m">'+tt('ws')+'</p>';
for(i=0;i<6*per;i++){var d=Math.floor(i/per),k=q[(n++)%q.length],g=0;while(wp[d].indexOf(k)>-1&&g<q.length){k=q[(n++)%q.length];g++}if(wp[d].indexOf(k)<0)wp[d].push(k)}
dn.forEach(function(x,j){h+='<div class="day"><div class="d'+(j==nw?" now":"")+'">'+x+'</div><div class="card" style="margin:0">'+(wp[j].length?wp[j].map(function(k){return '<span class="tag" style="--c:'+col(k)+'">'+emo(sub(k).n)+" "+esc(sub(k).n)+'</span>'}).join(""):'<span class="m">'+tt('rd')+'</span>')+'</div></div>'});return h}
function rPet(){petTick();save();var p=S.pet,sad=p.fed<25||p.joy<25,w=p.worn,h='<div class="stage"><div class="pet '+(sad?"sad":"bob")+'">'+stageEmo()+(w?'<span class="gear '+w+'">'+ld('gear').filter(function(g){return g.id==w})[0].e+'</span>':"")+'</div><div class="t" style="margin-top:8px">'+ld('levels')[Math.min(3,Math.floor((lvl()-1)/2))]+' · '+tt('lvl')+' '+lvl()+'</div><div class="m">'+mood()+'</div></div>';
h+='<h2>'+tt('ful')+'</h2>'+bar(p.fed,"var(--ok)")+'<h2>'+tt('joy')+'</h2>'+bar(p.joy,"#f08a1c")+'<h2>'+tt('fd')+'</h2><div class="shop">';
ld('foods').forEach(function(f){h+='<div class="card"><div class="e">'+f.e+'</div><div class="t">'+f.n+'</div><button class="g" data-a="food" data-v="'+f.id+'"'+(S.xp<f.c?" disabled":"")+'>'+f.c+' XP</button></div>'});
h+='</div><h2>'+tt('gr')+'</h2><div class="shop">';
ld('gear').forEach(function(g){var own=S.pet.own.indexOf(g.id)>-1;h+='<div class="card"><div class="e">'+g.e+'</div><div class="t">'+g.n+'</div>'+(own?'<button class="g" data-a="wear" data-v="'+g.id+'">'+(w==g.id?tt('uwr'):tt('wr'))+'</button>':'<button class="g" data-a="gear" data-v="'+g.id+'"'+(S.xp<g.c?" disabled":"")+'>'+g.c+' XP</button>')+'</div>'});
return h+'</div><div class="msg">'+tt('pm')+'</div>'}
function rProg(){var h='<div class="stats"><div class="card"><b>'+streak()+' 🔥</b><span class="m">'+tt('str')+'</span></div><div class="card"><b>'+weekHrs()+'</b><span class="m">'+tt('wk')+'</span></div><div class="card"><b>Lv '+lvl()+'</b><span class="m">'+S.totalXp+' XP</span></div></div><h2>'+tt('sh')+'</h2>';
S.subs.forEach(function(s){var op=ui.open==s.k;h+='<div class="card" style="--c:'+col(s.k)+'"><button class="row" data-a="open" data-v="'+s.k+'" style="width:100%;background:none;border:0;color:var(--ink);padding:0;text-align:left"><div style="flex:1"><div class="t">'+emo(s.n)+" "+esc(s.n)+'</div>'+bar(pct(s.k),col(s.k))+'<div class="m" style="margin-top:4px">'+Math.round(S.subjMin[s.k]||0)+' '+tt('mns')+'</div></div><b>'+pct(s.k)+'%</b></button>';
if(op){S.topics[s.k].forEach(function(t,j){h+='<button class="tp" data-a="topic" data-k="'+s.k+'" data-j="'+j+'"><span>'+esc(t[0])+'</span><span class="st s'+t[1]+'">'+tt('stn')[t[1]]+'</span></button>'});
h+='<div class="add"><input class="in" maxlength="40" placeholder="'+tt('at')+'"><button class="g" data-a="addtopic" data-v="'+s.k+'">'+tt('add')+'</button></div>'}h+='</div>'});
h+='<h2>'+tt('a14')+'</h2><div class="card"><div class="heat">';var d=new Date();d.setDate(d.getDate()-13);
for(var i=0;i<14;i++){var m=S.log[dk(d)]||0;h+='<i title="'+Math.round(m)+' min" class="'+(m>=60?"l3":m>=30?"l2":m>=1?"l1":"")+'"></i>';d.setDate(d.getDate()+1)}
return h+'</div></div><p><button class="g" data-a="reset">'+tt('br')+'</button></p>'}
function rTm(){var m=ui.tm,t=S.today.tasks[m.i],s=sub(t.k),n=S.topics[t.k][t.i][0];
if(m.stage=="ask"){var ok=m.el/1000>=CFG.minXpSec;return '<div class="tm"><div class="m">'+emo(s.n)+" "+esc(s.n)+'</div><h2>'+esc(n)+'</h2><div class="t">'+tt('aq').replace('{m}',Math.floor(m.el/60000))+'</div><div class="m">'+(ok?tt('as'):tt('anx'))+'</div><div class="btns"><button class="p" data-a="ask" data-v="y">'+tt('ay')+'</button><button class="g" data-a="ask" data-v="h">'+tt('ah')+'</button><button class="g" data-a="ask" data-v="n">'+tt('an')+'</button></div></div>'}
return '<div class="tm"><div class="m">'+emo(s.n)+" "+esc(s.n)+'</div><h2>'+esc(n)+'</h2><div class="big" id="clk">'+fmt(m.dur-m.el)+'</div><div class="btns"><button class="p" data-a="pause">'+(m.run?tt('tp'):tt('tr'))+'</button><button class="g" data-a="stop">'+tt('tst')+'</button></div><div class="m">'+tt('tmn')+'</div></div>'}
function shell(){var tb={home:tt('h'),week:tt('w'),pet:tt('p'),prog:tt('pg')},v={home:rHome,week:rWeek,pet:rPet,prog:rProg}[ui.tab]();
var l_btn='<button class="chip" style="border:0;cursor:pointer;padding:5px 8px" data-a="lang">'+(ui.lang=="ms"?"🇲🇾 BM":"🇬🇧 EN")+'</button>';
return '<div class="top"><h1>'+tb[ui.tab]+'</h1><div style="display:flex;gap:6px"><span class="chip">⭐ '+S.xp+' XP</span>'+l_btn+'</div></div><main>'+v+'</main><nav>'+[["home","🏠",tt('h')],["week","🗓️",tt('w')],["pet","🐾",tt('p')],["prog","📈",tt('pg')]].map(function(x){return '<button data-a="tab" data-v="'+x[0]+'" class="'+(ui.tab==x[0]?"on":"")+'"><span>'+x[1]+'</span>'+x[2]+'</button>'}).join("")+'</nav>'}

/* ============ ONBOARDING ============ */
function pre(){var o=ui.ob;return o.type=="r"?ld('presets').r:(o.lvl<=3?ld('presets').l:ld('presets').u)}
function has(n){return ui.ob.subs.some(function(s){return s.n==n})}
function chip(t,on,a,v){return '<button class="oc'+(on?" on":"")+'" data-a="'+a+'" data-v="'+esc(v)+'">'+esc(t)+'</button>'}

/* ===== SPLASH SCREEN & ONBOARDING ===== */
function rSplash(){
  var l_btn='<button class="lang-toggle-splash" data-a="lang">'+(ui.lang=="ms"?"🇲🇾 BM":"🇬🇧 EN")+'</button>';
  return '<div class="splash">'+l_btn+
    '<span class="sp" style="top:16%;left:12%">✦</span><span class="sp" style="top:24%;right:10%;animation-delay:1s">✦</span><span class="sp" style="top:44%;left:20%;animation-delay:2s;font-size:10px">✦</span><span class="sp" style="top:50%;right:16%;animation-delay:1.5s;font-size:10px">✦</span>'+
    '<div class="brand-group">'+
      '<img class="logo-img" src="logo.png" alt="StudyPet" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'+
      '<div class="logo-fallback"><div class="mascots"><span>🐱</span><span>🐶</span></div><div class="logo-text"><span>studypet</span></div></div>'+
      '<div class="logo-desc">Focus • Levels • Companions</div>'+
    '</div>'+
    '<button class="btn-started" data-a="getstarted">'+tt('btn_start')+'</button>'+
  '</div>'}

function rOb(){
  var o=ui.ob,s=o.st,i;
  if(s == -1) return rSplash();
  var l_btn='<button class="oc" style="padding:4px 10px;font-size:12px;position:absolute;right:18px;top:22px;z-index:2" data-a="lang">'+(ui.lang=="ms"?"🇲🇾 BM":"🇬🇧 EN")+'</button>';
  var h='<div class="obin" style="position:relative">'+l_btn+'<div class="dots">';for(i=0;i<5;i++)h+='<i'+(i<=s?' class="on"':"")+'></i>';h+='</div>';
  if(s==0)h+='<h2>'+tt('ob_w')+'</h2><div class="m">'+tt('ob_sub')+'</div><div class="phr"><button class="av" data-a="pic" aria-label="'+tt('p_alt')+'">'+(o.photo?'<img src="'+o.photo+'" alt="">':"📷")+'</button><div class="m">'+tt('p_alt')+'</div></div><label class="m" for="nm">'+tt('nm')+'</label><input id="nm" class="in" maxlength="24" placeholder="'+tt('nm_p')+'" value="'+esc(o.name)+'"><label class="m">'+tt('ty')+'</label><div class="cw">'+chip(tt('ty_r'),o.type=="r","ty","r")+chip(tt('ty_m'),o.type=="m","ty","m")+'</div>';
  else if(s==1){var r=o.type=="r";h+='<h2>'+(r?tt('l_r'):tt('l_m'))+'</h2><div class="cw">';for(i=1;i<=(r?6:5);i++)h+=chip((r?tt('lv_r'):tt('lv_m'))+i,o.lvl==i,"lv",i);h+='</div>'}
  else if(s==2){var pr=pre();h+='<h2>'+tt('sb_t')+'</h2><div class="m">'+tt('sb_s')+'</div><div class="cw">';pr.forEach(function(n){h+=chip(n,has(n),"sub",n)});o.subs.forEach(function(x){if(pr.indexOf(x.n)<0)h+=chip(x.n,true,"sub",x.n)});h+='</div><div class="add"><input id="ns" class="in" maxlength="30" placeholder="'+tt('sb_p')+'"><button class="g" data-a="addsub">'+tt('add')+'</button></div>'}
  else if(s==3){h+='<h2>'+tt('lv_t')+'</h2><div class="m">'+tt('lv_s')+'</div>';o.subs.forEach(function(x,j){h+='<div class="card" style="margin:0"><div class="t">'+emo(x.n)+" "+esc(x.n)+'</div><div class="cw" style="margin-top:6px">'+[tt('lw'),tt('la'),tt('ls')].map(function(t,q){return '<button class="oc'+(x.l==q?" on":"")+'" data-a="lvl" data-i="'+j+'" data-v="'+q+'">'+t+'</button>'}).join("")+'</div></div>'});h+='<label class="m">'+tt('hr_q')+'</label><div class="cw">'+[1,2,3,4].map(function(q){return chip(q+" "+tt('hr'),o.hrs==q,"hr",q)}).join("")+'</div>'}
  else h+='<h2>'+tt('ex_t')+'</h2><div class="cw">'+ld('exams')[o.type].map(function(t){return chip(t,o.ex==t,"ex",t)}).join("")+'</div><label class="m" for="dt">'+tt('dt')+'</label><input id="dt" type="date" class="in" value="'+o.date+'"><div class="m">'+tt('dt_s')+'</div>';
  return h+'<div class="obf">'+(s>0?'<button class="g" data-a="back">'+tt('bk')+'</button>':"")+'<button class="p" data-a="next">'+(s==4?tt('gn'):tt('nx'))+'</button></div></div>'}
function keep(){var o=ui.ob;if($("nm"))o.name=$("nm").value;if($("dt"))o.date=$("dt").value}
function nextOb(){var o=ui.ob,s=o.st;
if(s==0&&(!o.name.trim()||!o.type))return pop(tt('e_n'));
if(s==1&&!o.lvl)return pop(tt('e_l'));
if(s==2&&!o.subs.length)return pop(tt('e_s'));
if(s==4){if(!o.date||!o.ex)return pop(tt('e_x'));return finOb()}
o.st++;if(o.st==2&&!o.pre){o.pre=1;ld('core').forEach(function(n){if(!has(n))o.subs.push({n:n,l:1})})}
if(o.st==4){if(!o.ex)o.ex=o.type=="m"&&o.lvl==5?"SPM":(o.type=="r"?ld('exams').r[0]:ld('exams').m[1]);if(!o.date)o.date=dk(new Date(Date.now()+60*864e5))}render()}
function finOb(){var o=ui.ob,tp={},n=CFG.topicCount[o.type];
S={name:o.name.trim(),type:o.type,lvl:o.lvl,hrs:o.hrs,ex:o.ex,date:o.date,photo:o.photo,xp:0,totalXp:0,log:{},subjMin:{},today:null,
subs:o.subs.map(function(s,i){var k="k"+i;tp[k]=[];for(var j=1;j<=n;j++)tp[k].push([tt('ch')+j,0,0]);return {n:s.n,l:s.l,k:k}}),topics:tp,
pet:{fed:80,joy:80,t:Date.now(),own:[],worn:""}};
ui.tab="home";save();render();pop(tt('d_gn'))}

/* ============ EVENT ============ */
document.addEventListener("click",function(e){var b=e.target.closest("[data-a]");if(!b)return;var a=b.dataset.a,v=b.dataset.v,o=ui.ob;
if(a=="lang"){keep();ui.lang=ui.lang=="ms"?"en":"ms";try{localStorage.setItem(CFG.key+"_lang",ui.lang)}catch{/* ignore */}render();return}
if(a=="getstarted"){o.st=0;render();return}
if(!S){keep();
 if(a=="ty"){o.type=v;o.lvl=0;o.subs=[];o.pre=0}
 else if(a=="lv"){if(o.lvl!=+v){o.subs=[];o.pre=0}o.lvl=+v}
 else if(a=="sub"){var x=-1;o.subs.forEach(function(s,j){if(s.n==v)x=j});if(x>-1)o.subs.splice(x,1);else o.subs.push({n:v,l:1})}
 else if(a=="addsub"){var t=$("ns").value.trim();if(t&&!has(t))o.subs.push({n:t,l:1})}
 else if(a=="lvl")o.subs[+b.dataset.i].l=+v;else if(a=="hr")o.hrs=+v;else if(a=="ex")o.ex=v;
 else if(a=="pic"){$("pf").click();return}else if(a=="back")o.st--;else if(a=="next"){nextOb();return}
 render();return}
if(a=="tab"){ui.tab=v}
else if(a=="pic"){$("pf").click();return}
else if(a=="start"){startTm(+b.dataset.i);return}
else if(a=="tick"){var tk=S.today.tasks[+b.dataset.i];tk.done=1;addXp(5);save();pop(tt('ptk'))}
else if(a=="pause"){var m=ui.tm;m.run=!m.run;m.last=Date.now();render();return}
else if(a=="stop"){ui.tm.stage="ask";clearInterval(iv)}
else if(a=="ask"){finish(v);return}
else if(a=="food"){var f=ld('foods').filter(function(x){return x.id==v})[0];if(S.xp>=f.c){S.xp-=f.c;petTick();S.pet.fed=Math.min(100,S.pet.fed+f.fed);S.pet.joy=Math.min(100,S.pet.joy+f.joy);save();pop(tt('py')+f.e)}}
else if(a=="gear"){var g=ld('gear').filter(function(x){return x.id==v})[0];if(S.xp>=g.c){S.xp-=g.c;S.pet.own.push(v);S.pet.worn=v;save();pop(tt('pw')+g.n+" "+g.e)}}
else if(a=="wear"){S.pet.worn=S.pet.worn==v?"":v;save()}
else if(a=="open"){ui.open=ui.open==v?null:v}
else if(a=="topic"){var q=S.topics[b.dataset.k][+b.dataset.j];q[1]=(q[1]+1)%3;if(q[1]==2)q[2]=Date.now();save()}
else if(a=="addtopic"){var i=b.previousElementSibling,n=i.value.trim();if(n){S.topics[v].push([n,0,0]);save()}}
else if(a=="reset"){if(confirm(tt('cr'))){try{localStorage.removeItem(CFG.key)}catch{/* ignore */}S=null;ui.ob={st:-1,name:"",type:"",lvl:0,subs:[],hrs:2,ex:"",date:"",pre:0,photo:""}}}
render()});
document.addEventListener("keydown",function(e){if(e.key=="Enter"&&e.target.id=="ns"){e.preventDefault();document.querySelector('[data-a="addsub"]').click()}});

/* ============ GAMBAR PROFIL ============ */
$("pf").addEventListener("change",function(){var f=this.files[0];this.value="";if(!f)return;if(!/^image\//.test(f.type))return pop(tt('ei'));
var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var c=document.createElement("canvas"),m=Math.min(im.width,im.height);c.width=c.height=256;
c.getContext("2d").drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,256,256);var u=c.toDataURL("image/jpeg",.8);
if(S){S.photo=u;save()}else{keep();ui.ob.photo=u}render()};im.onerror=function(){pop(tt('eio'))};im.src=r.result};r.readAsDataURL(f)});

function render(){$("app").innerHTML=!S?rOb():ui.tm?rTm():shell()}
load();render();
