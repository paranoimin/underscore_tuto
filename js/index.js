(function() {
    //-----------------------------------------------------------------------------
    //
    // _.each 포문처럼 반복문 하지만 아이템 만큼 알아서 돌려준다 
    //
    //-----------------------------------------------------------------------------
    var eachArea = $("#eachArea");
    var eachInner = "";
    var jamin = {
        name: "jamin",
        age: 35,
        gender: "mail"
    }

    _.each( jamin, function( data, key ) {
        eachInner += "<p>" + key + " : " + data + "</p>";
        eachArea.html(eachInner);
    });
    //-----------------------------------------------------------------------------
    //
    // _.map
    //
    //-----------------------------------------------------------------------------
    var mapArea = $("#mapArea");
    var mapInner = "";
    var num = [1, 2, 3];
    var numMulti = _.map(num, function( value, index, items ) {
        items[index] = items[index] *2;
        return value * 3;
    });

    mapInner = "넘버즈 : " + num + " 멀티 : " + numMulti;
    mapArea.html(mapInner);
    //-----------------------------------------------------------------------------
    //
    // _.reduce + _.reduceRight
    //
    //-----------------------------------------------------------------------------
    var reduceArea = $("#reduceArea");
    var reduceInner = "";
    var reduceRightArea = $("#reduceRightArea");
    var reduceRightInner = "";
    var numbers = [1, 2, 3];
    var sumReduce = _.reduce( numbers, function( total, item, index, numbers ) {
        console.log("reduce = total : " + total + " item : " + item + " index : " + index + " numbers : " + numbers);
        return total + item;
    });
    var sumReduceRight = _.reduceRight( numbers, function( total, item, index, numbers ) {
        console.log("reduce = total : " + total + " item : " + item + " index : " + index + " numbers : " + numbers);
        return total + item;
    });

    reduceInner = sumReduce;
    reduceArea.html("reducd : " + reduceInner);
    reduceRightInner = sumReduceRight;
    reduceRightArea.html("reduceRight : " + reduceRightInner);
    //-----------------------------------------------------------------------------
    //
    // _.find + _.filter
    //
    //-----------------------------------------------------------------------------
    var findArea = $("#findArea");
    var findAreaInner = "";
    var filterArea = $("#filterArea");
    var filterAreaInner = "";
    var filterNums = [1, 2, 3, 4, 5, 6];
    var find = _.find(filterNums, function( num ) {
        return num % 3 == 0;
    });
    var filter = _.filter(filterNums, function( num ) {
        return num % 3 == 0;
    });

    findAreaInner = "find : " + find;
    findArea.html(findAreaInner);

    filterAreaInner = "filter : " + filter;
    filterArea.html(filterAreaInner);    
    console.log("filget : " + filter);
    //-----------------------------------------------------------------------------
    //
    // _.where + _.finWhere
    //
    //-----------------------------------------------------------------------------
    var whereArea = $("#whereArea");
    var whereAreaInner = "";
    var findWhereArea  = $("#findWhereArea");
    var findWhereAreaInner = "";
    var people = [
        {name: "tom", age: 21},
        {name: "dick", age: 21},
        {name: "harry", age: 80}
    ];
    var where = _.where(people, {age: 21});
    var findWhere = _.findWhere(people, {age: 21});

    whereAreaInner = "where : " + where; //where[0].name
    console.log(where);
    whereArea.html(whereAreaInner);
    findWhereAreaInner = "findWherer : " + findWhere.name;
    console.log(findWhere.name);
    findWhereArea.html(findWhereAreaInner);
    //-----------------------------------------------------------------------------
    //
    // _.reject
    //
    //-----------------------------------------------------------------------------
    var rejectArea = $("#rejectArea");
    var rejectAreaInner = "";
    var rejectNims = [1, 2, 3, 4, 5, 6];
    var odd = _.reject(rejectNims, function( num ) {
        return num % 2 == 0;
    });

    rejectAreaInner = odd;
    rejectArea.html(rejectAreaInner);
}());