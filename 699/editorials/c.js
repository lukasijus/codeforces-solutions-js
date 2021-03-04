function Main(){
	var t = nextInt();
	for(var i = 0; i < t; i++){
		var N = nextInt();
		var M = nextInt();
		var alist = nextIntArray(N);
		var blist = nextIntArray(N);
		var clist = nextIntArray(M);
		var diff = {};
		var colorMap = {};
		for(var j = 0; j < N; j++){
			if(colorMap[alist[j]] == null){
				colorMap[alist[j]] = new Set();
			}
			colorMap[alist[j]].add(j);
			if(alist[j] != blist[j]){
				if(diff[blist[j]] == null){
					diff[blist[j]] = [];
				}
				diff[blist[j]].push(j);
			}
		}
 
		var keep = [];
		var output = [];
		for(var j = 0; j < M; j++){
			var c = clist[j];
			if(diff[c] == null || diff[c].length == 0){
				if(colorMap[c] != null && colorMap[c].size > 0){
					var te = Array.from(colorMap[c]);
					while(keep.length > 0){
						output.push(te[0] + 1);
						keep.pop();
					}
					output.push(te[0] + 1);
				}else{
					keep.push(c);
				}
			}else{
				var ok = diff[c].shift();
				while(keep.length > 0){
					output.push(ok + 1);
					keep.pop();
				}
				output.push(ok + 1);
				colorMap[alist[ok]].delete(ok);
				if(colorMap[c] == null){
					colorMap[c] = new Set();
				}
				colorMap[c].add(ok);
			}
		}
		//myerr(diff);
		var key = Object.keys(diff);
		var isOK = true;
		for(var j = 0; j < key.length; j++){
			if(diff[key[j]].length > 0){
				isOK = false;
				break;
			}
		}
		if(!isOK || output.length != M){
			myout("NO");
		}else{
			myout("YES");
			myout(myconv(output, 8));
		}
	}
}