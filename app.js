angular.module('memoryGame', [])
    .controller('mainCtrl', ['$scope', '$timeout', function($scope, $timeout){
        
        var cards = [
            {
                name: "php",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/php-logo_1.png",
                id: 1,
                open: false
            },
            {
                name: "css3",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/css3-logo.png",
                id: 2,
                open: false
            },
            {
                name: "html5",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/html5-logo.png",
                id: 3,
                open: false
            },
            {
                name: "jquery",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/jquery-logo.png",
                id: 4,
                open: false
            }, 
            {
                name: "javascript",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/js-logo.png",
                id: 5,
                open: false
            },
            {
                name: "node",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/nodejs-logo.png",
                id: 6,
                open: false
            },
            {
                name: "photoshop",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/photoshop-logo.png",
                id: 7,
                open: false
            },
            {
                name: "python",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/python-logo.png",
                id: 8,
                open: false
            },
            {
                name: "rails",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/rails-logo.png",
                id: 9,
                open: false
            },
            {
                name: "sass",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sass-logo.png",
                id: 10,
                open: false
            },
            {
                name: "sublime",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/sublime-logo.png",
                id: 11,
                open: false
            },
            {
                name: "wordpress",
                img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/wordpress-logo.png",
                id: 12,
                open: false
            },
        ];

        Array.prototype.shuffle = function() {
            for(var i=0; i < this.length; i++) {
                var random = Math.floor(Math.random() * this.length);
                [this[i], this[random]] = [this[random], this[i]];
            }
        };
        var lastOpened, 
            count;

        function init() {
            $scope.cards = angular.copy(cards.concat(angular.copy(cards)));
            $scope.cards.shuffle();
            lastOpened = null;
            count = 0;
        }
        init();

        $scope.onCardClick = function($index) {
            if($scope.cards[$index].open) return;
            $scope.cards[$index].open = true;
            if(lastOpened) {
                if(lastOpened.id !== $scope.cards[$index].id) {
                    $timeout(function() {
                        lastOpened.open = false;
                        $scope.cards[$index].open = false;
                        lastOpened = null;
                    }, 600);
                }
                else {
                    count += 2;
                    if(count === $scope.cards.length) {
                        window.alert('Game Over');
                        init();
                        return;
                    }
                    lastOpened = null;
                }
            } else {
                lastOpened = $scope.cards[$index];
            }
            
        };


    }]);
