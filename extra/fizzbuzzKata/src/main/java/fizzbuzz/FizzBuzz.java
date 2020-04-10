package fizzbuzz;

public class FizzBuzz {
	
	
	public FizzBuzz() {
		System.out.println("object check");
	}

	public String evaluate(Integer i) {
		
		String output = i.toString();
		
		if (i%3 == 0) {
			output = "Fizz";
		}
		else if (i%5 == 0) {
			output = "Buzz";
		}
		else if (i%15 ==0) {
			output = "FizzBuzz";
		}
		
		return output;
	}

}
