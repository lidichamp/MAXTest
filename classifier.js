var _ = require('underscore');

/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */

function classifier(input){
    let sorted = sortByAge(toAge(input));
    let result = groupAging(sorted);
    return formatOutput(result);
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
        one.dob = calculate_age(new Date(one.dob));
        result.push(one);
    });
    return result;
}
function sortByAge(data){
    return _.sortBy(data, 'dob');
}

function calculate_age(dob) { 
    var today = new Date();
    var diff_ms = today- dob;
    var age_dt = new Date(diff_ms); 
    var thisYear=0;
    if(today.getMonth()<dob.getMonth()){
        thisyear=1;
    }
    else if(today.getMonth()== dob.getMonth() && today.getDate()<dob.getDate()){
        thisYear=1;
    }
    return Math.abs(age_dt.getUTCFullYear() - thisYear - 1970);
}

module.exports=classifier;