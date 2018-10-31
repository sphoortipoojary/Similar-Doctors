
angular.module('myApp', [])
.controller('namesCtrl', function($scope) {
$scope.show = false;
    $scope.names = [
        {id: '1',name:'Neil M',organization:'California Medical Center',state:'CA',specialty:'Internal Medicine',review_score:60},
        {id: '2',name:'Arthur F',organization:'California Medical Center',state:'CA',specialty:'Neurology',review_score:78},
        {id: '3',name:'Elizabeth M',organization:'California Medical Center',state:'CA',specialty:'Cardiology',review_score:70},
        {id: '4',name:'Chloe K',organization:'California Medical Center',state:'CA',specialty:'Gynaecology',review_score:90},
        {id: '5',name:'Steve R',organization:'California Medical Center',state:'CA',specialty:'Cardiology',review_score:82},
        {id: '6',name:'Tony S',organization:'Florida Medical Center',state:'FL',specialty:'Internal Medicine',review_score:67},
        {id: '7',name:'Daniel M',organization:'Florida Medical Center',state:'FL',specialty:'Internal Medicine',review_score:65},
        {id: '8',name:'Jesse M',organization:'Florida Medical Center',state:'FL',specialty:'Cardiology',review_score:90},
        {id: '9',name:'Samantha P',organization:'Illinois Medical Center',state:'IL',specialty:'Internal Medicine',review_score:89},
        {id: '10',name:'Sydney R',organization:'Illinois Medical Center',state:'IL',specialty:'Internal Medicine',review_score:86},
        {id: '11',name:'Arelene E',organization:'Illinois Medical Center',state:'IL',specialty:'Oncology',review_score:98},
        {id: '12',name:'Steve R',organization:'Illinois Medical Center',state:'IL',specialty:'Oncology',review_score:95},
        {id: '13',name:'Rossie J',organization:'New York Medical Center',state:'NY',specialty:'Internal Medicine',review_score:85},
        {id: '14',name:'Jason C',organization:'New York Medical Center',state:'NY',specialty:'Dermatology',review_score:83},
        {id: '15',name:'Robbie T',organization:'New York Medical Center',state:'NY',specialty:'Cardiology',review_score:97},
        {id: '16',name:'Caroline C',organization:'New York Medical Center',state:'NY',specialty:'Dermatology',review_score:81},
        {id: '17',name:'Max B',organization:'New York Medical Center',state:'NY',specialty:'Cardiology',review_score:91},
        {id: '18',name:'Meredith G',organization:'California Medical Center',state:'CO',specialty:'Gynaecology',review_score:63},
        {id: '19',name:'April K',organization:'California Medical Center',state:'CO',specialty:'Dermatology',review_score:90},
        {id: '20',name:'Richard B',organization:'California Medical Center',state:'CO',specialty:'Neurology',review_score:77},
    ];

    $scope.clicked=function(id){
        $scope.iden=id;
        $scope.show=true;

    }
});
