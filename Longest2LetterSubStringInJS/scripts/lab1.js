/**
 * Created by daming on 2/8/15.
 */

function validate() {
    var text = document.getElementById('id1').value;
    console.log(text);
    var my_map = {};
    var num_keys = 0;
    var cur_longest = "";
    var i= 0,j=0;
    while (j < text.length) {
        if (!(text.charAt(j) in my_map)) {
            my_map[text.charAt(j)] = 1;
            num_keys++;
            if (num_keys == 3) {
                if (j - i > cur_longest.length) {
                    cur_longest = text.substring(i, j);
                }
                while (i < j) {
                    my_map[text.charAt(i)]--;
                    if (my_map[text.charAt(i)] == 0) {
                        delete my_map[text.charAt(i)];
                        num_keys--;
                        i++;
                        break;
                    }
                    i++;
                }
            }
        } else {
            my_map[text.charAt(j)]++;
        }
        j++;
    }
    if (j - i > cur_longest.length) {
        cur_longest = text.substring(i, j);
    }
    document.getElementById("disp1").innerHTML = cur_longest;
}