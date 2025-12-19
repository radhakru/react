import java.util.*;
import java.util.stream.Collectors;
class Text {
    public List<String> buildArray(int[] target, int n) {
        List<Integer> list= Arrays.stream(target) // Creates an IntStream
                                        .boxed()           // Boxes each int to an Integer
                                        .collect(Collectors.toList()); 
        Set<Integer> streams=new HashSet<>();
           Set<Integer> set1=new HashSet<>(list);
        Stack<Integer> stack=new Stack<>();
        List<String> res=new ArrayList<String>();

    //add all the integer to set
      for(int i=1;i<=n;i++){
        streams.add(i);
      }
      for(int e:streams){
        if(!(stack.isEmpty()))
        {
            stack.push(e);
            res.add("Push");
            if(!set1.contains(stack.peek())){
                stack.pop();
                res.add("Pop");
            }
            if(stack.peek()==target[target.length-1]){
                return res;
            }

        }else{
            stack.push(e);
            res.add("Push");
        }
      }
      return res;




    }


    public static void main(String[] args) {
        Text text=new Text();
        System.out.println(text.buildArray(new int[]{1},2));
    }
}