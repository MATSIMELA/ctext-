	$(document).ready(function () {
		$.ajax({
		 url : "http://143.160.25.253:8080/CTexTWebAPI/services/languages"
				}).then(function (data) {
				   console.log(data);
			 for(var lang in data.languages)
				   {
					 $("#dd1").append("<option>" + data.languages[lang] + "</option>");
				   }
			});
		
		$("#dd1").click(function() {
		var selectedItems = document.getElementById("dd1").value;
		$.ajax({
				url: "http://143.160.25.253:8080/CTexTWebAPI/services/coretechs?lang="+selectedItems
			   }).then(function(data){
		$("#dd2").html("");
		for(var tech in data.technologies)
		   {
			   $("#dd2").append("<option>" + data.technologies[tech] + "</option>");
				console.log(data);
		   }
		});
	});

	 function makeid() {
		// alert("5");
			"use strict";
			var text = "";
			var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
			for (var i = 0; i < 20; i++)
			{
				text += possible.charAt(Math.floor(Math.random() * possible.length));
			}
		 return  text;
	 };
	var token = makeid();

	$.ajax({
		url: "http://143.160.25.253:8080/CTexTWebAPI/services/setuser",
		type: "POST",
		data: {},
		dataType:'json',
		headers: 
		{ 
			"Authorization" : "Basic " + btoa(token),
			"Content-Type": "application/x-www-form-urlencoded"
		},
		success: function (response) {
			console.log(response);
		},
		error: function(error){c
			console.log("Something went wrong", error);
		}
	});

	var inputValid = false;
	var	selectValid = false;
	var selectedLang;
    var textArea;
		
 $('select').on('change', function(){
	 
	 if(selectedLang == this.value){
		   selectValid = true;
	 }
	
	 $('#InputText').keyup(function (){
		 if(textArea == this.value)
		 {
			   inputValid = true;
		 }
	  
	 if(selectValid == true && inputValid==true)
		 {
			 $('#ButtonUpload').prop('disabled',true);
			 $('#ButtonProcess').prop('disabled',false);	 
		 } 
		
	  if(selectValid == true && inputValid==false)
		 {
			 $('#ButtonUpload').prop('disabled',false);
			  $('#ButtonProcess').prop('disabled',true);
		 } 
	
		 if(textArea) 
		 {
			inputValid = true;
		 }
		 if ($(inputValid==true
		    &&
		    selectValid==true))
		 {
			$('#ButtonProcess').prop('disabled', false);
			$('#ButtonUpload').prop('disabled',true);
		 }
		 
		 $("#ButtonProcess").click(function(){
			$("#InputPanel").slideUp("slow");
		});
		($('#Input_Panel')).click(function (){
			$("#InputPanel").slideDown("slow");
		});
	

	});
	 	});
			});



