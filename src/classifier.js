var _ = require('underscore');


function classifier(input){
    if(Array.isArray(input)){
    let age_input=toAge(input);
    let sorted = sortByAge(age_input);
    let result = groupAging(sorted);
    return formatOutput(result);
    }
    else{
        throw "wrong input";
    }
}

function formatOutput(result){
    let formatted = {
        noOfGroups: _.size(result)
    };
    _.each(result, function(res, index){
        formatted['group'+(index+1)] = res;
    });
    return formatted;
}

function groupAging(input){
    let groups = [];
    _.each(input, function(one){
        let last_group = _.last(groups);
        let is_new_group = true;
        if(last_group){
            if(_.size(last_group.members) < 3){
                let pass_age_differene = true;
                _.each(last_group.members, function(member){
                    if((one.dob - member.age) > 5){
                        pass_age_differene = false;
                    }
                });
                if(pass_age_differene){
                    last_group.members.push(memberObject(one));
                    last_group.oldest = one.dob;
                    last_group.sum += one.dob;
                    last_group.regNos.push(parseInt(one.regNo));
                    last_group.regNos=_.sortBy(last_group.regNos, function(num){
                        return num;
});
                    groups[_.size(groups)-1] = last_group;
                    is_new_group = false;
                }
            }
        }
        if(is_new_group){
            last_group = {
                members:[memberObject(one)],
                oldest:one.dob,
                sum:one.dob,
                regNos: [parseInt(one.regNo)]
            }
            groups.push(last_group);
        }
    });
    return groups;
}

function memberObject(one){
    return {name: one.name, age: one.dob};
}

function toAge(data){
    let result = [];
    _.each(data, function(one){
        one.dob = calculate_age(one.dob);
        result.push(one);
    });
    return result;
}
function sortByAge(data){
    return _.sortBy(data, 'dob');
}

function calculate_age(dob) {
    var today=new Date();
    var dob=new Date(dob);
    var thisYear=0;
        if(today.getMonth()<dob.getMonth()){
            thisYear=1;
        }
        else if(today.getMonth()== dob.getMonth() && today.getDate()<dob.getDate()){
            thisYear=1;
            }
    var age= Math.floor(today.getFullYear() - thisYear- (dob).getFullYear() );
    return age;
}
module.exports=classifier; 