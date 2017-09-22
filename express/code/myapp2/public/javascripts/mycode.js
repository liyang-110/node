function changetext(c)
{
	var x=document.getElementById("textfeild");

	switch(c)
	{
		case '+':
		case '-':
		case '*':
		case '/':
			x.innerHTML=x.innerHTML+c;
			break;
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
			if(x.innerHTML=='0')
			{
				x.innerHTML=c;
			}
			else
			{
				x.innerHTML=x.innerHTML+c;
			}
			break;
		case '=':
			x.innerHTML=eval(x.innerHTML)
			break;
		case 'c':
			x.innerHTML='0';
		case '.':
			if((x.innerHTML).match('.')=='null')
			{
				x.innerHTML=x.innerHTML+c;
			}
			break;
		default:
			break;
	}
}

