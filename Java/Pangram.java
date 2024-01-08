public class Pangram {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; 
        boolean isPangram = checkPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkPangram(String input) {
        
        boolean[] isPresent = new boolean[26];
        
        input = input.toLowerCase();

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                isPresent[index] = true;
            }
        }

        for (boolean letterPresent : isPresent) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }
}