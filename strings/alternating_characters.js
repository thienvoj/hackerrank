function alternatingCharacters(s) {
    let last = s.charAt(0),
        dels = 0;

    for(let i = 1; i < s.length; i++) {
        if (last === s.charAt(i)) {
            dels++;
        } else {
            last = s.charAt(i);
        }
    }

    return dels;
}