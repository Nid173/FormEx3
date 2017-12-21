var myLoop = setInterval(function(){ popImg(); }, 100);

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

	var randomImages = ['bike','bike1','bike2','bike3','bike4'];
	var oldImg = "black";
	var oldSize = "50px 50px";
	var oldPos = "0px 0px";
	var counter =0;
	var moveLoop;
	var counterRun=0;
	var HTMLcode = 
	`
	<div class="container">
				<div class="row">
				<div class="col"><h1> SignUp for Bike Trip </h1></div>
				</div>
				<div class="row">
					<div class="col"></div>
					<div class="col">
				<form action="http://html5-book.co.il/teach/forms/get_form2.php" method="get">
						 <label> Full Name <input type="text" name="fullName" required ></label>
						 <label> Password <input type="password"  name="pass" required></label>
						 <label> Email <input type="email" name="mail"></label>
						 <label> Website <input type="url" name="website"></label>
						 <label> Phone <input type="tel" name="phone" pattern="[0-9]{10}" value="10 numbers length"
></label><br>
						 <label> Coffe <input type="text" name="coffee"></label>
						 <label> Choose preferred distance <input type="range" min="50" max="100" name="temper"></label>
						 <label> Adress <input type="textarea" name="address"></label>
						 
						<label>		
																    <div class="form-check form-check-inline">
						  <label class="form-check-label">
						    <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male"> Male
						  </label>
						</div>
						<div class="form-check form-check-inline">
						  <label class="form-check-label">
						    <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female"> Female
						  </label>
						</div>
										
						</label>
						<br>
						<label>Age<select name="age">
							<option>18</option>
							<option selected>19</option>
							<option>20</option>
							<option>21</option>
							<option>22</option>
							<option>23</option>
							<option>24</option>
							<option>25</option>
							<option>26</option>
							<option>27</option>
							<option>28</option>
							<option>29</option>
							<option>30</option>
							<option>31</option>
							<option>32</option>
							<option>33</option>
							<option>24</option>
							<option>25</option>
						</select>
						</label>
						<br>
						<div class="row">
						<div class="col"></div>
						<div class="col">
						 <input type="submit" value="submit" />
						</div>
						 <div class="col"></div>
						 </div>
					</div>
				</form>
				
					<div class="col"></div>
				</div>
	`;
	

	
	
function BigBike(){
	$("#bodybackground").append('<div id=BigBikeW></div>');
	var MovingWrapper = $('#BigBikeW');
	MovingWrapper.append('<div id=mDiv></div>');
	var mDiv = $('#mDiv');
	mDiv.append(HTMLcode);
	//var fForm = $('#Fullform');
	MovingWrapper.animate({right: '-150%',}, 5000 );
}
function deleteDivs(){
	counterRun = 0 ;
	while(counterRun<51)
	$('#Num'+counterRun).remove();
}

function MoveDivs(){
	$('#Num'+counterRun).animate({left: '150%',}, 5000 ); 
	
	counterRun++;
	if(counterRun>50){
	clearInterval(moveLoop);
	//deleteDivs();
	BigBike();
	}
}
	
function popImg(){
	
	if(counter>50){
	clearInterval(myLoop);
	moveLoop = setInterval(function(){ MoveDivs(); }, 100);
	}else{
	var rndNum = Math.floor(Math.random() * randomImages.length);
		var newImg = "url(././SVG/" + randomImages[rndNum] + ".svg) no-repeat";
		var rand = getRandomInt (30, 70);
		var newSize = rand +"px " + rand +"px " ;
		var newPos = getRandomInt (1, 1400)+"px "+getRandomInt (1, 1400)+"px";
		oldSize = newSize + "," + oldSize;
		oldImg = newImg + "," + oldImg;
		oldPos = newPos + "," + oldPos;
	$("#bodybackground").append('<div class=randomDivs id=Num'+counter+'></div>');
	var CurrentDiv = $('#Num'+counter);
	CurrentDiv.css("top",getRandomInt (1, 1400)).css("left",getRandomInt (1, 1400)).css("height",rand).css("width",rand).css("background",newImg).css("background-size","100%");
	counter++;

	}
}

