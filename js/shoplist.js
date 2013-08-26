

var ShopCtrl = function(
	$scope,
	localStorageService
){
	localStorageKey = 'StorageTest';

	if (localStorageService.get(localStorageKey)) {
		$scope.items = angular.fromJson(localStorageService.get(localStorageKey));
	} else {
		$scope.items = [];
	}

	$scope.addItem = function() {
		var testKey = $scope.itemText;
		$scope.items.push(testKey);
		localStorageService.add(localStorageKey, angular.toJson($scope.items));
		$scope.itemText = '';
	};

	$scope.removeItem=function(item){ 
    	var index=$scope.items.indexOf(item)
    	$scope.items.splice(index,1); 
    	localStorageService.add(localStorageKey, angular.toJson($scope.items));
    }

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.items, function(item) {
		});
		return $scope.items.length;
	};

	$scope.clear = function() {
		$scope.items = [];
		localStorageService.clearAll();
	};

	$scope.email = function () {
		var address = ' ';
		if ($scope.address !== undefined) 
			address = $scope.address;

		var emailBody = "Items to get:\n\n";
		angular.forEach($scope.items, function(item) {
			emailBody += (item + "\n");
		});
		return ("mailto:" + address + "?subject=Shopping List&body=" + encodeURIComponent(emailBody));
	};
};
