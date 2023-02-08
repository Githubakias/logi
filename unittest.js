import static org.junit.Assert.assertEquals;
import java.util.Arrays;
import java.util.List;
import org.junit.Test;

public class ListTransformerTest {
  @Test
  public void testTransformListWithValidInput() {
    List<String> input = Arrays.asList("hello", "world");
    List<String> expectedResult = Arrays.asList("HELLO", "WORLD");
    List<String> result = ListTransformer.transformList(input);
    assertEquals(expectedResult, result);
  }

  @Test
  public void testTransformListWithEmptyInput() {
    List<String> input = Arrays.asList();
    List<String> expectedResult = Arrays.asList();
    List<String> result = ListTransformer.transformList(input);
    assertEquals(expectedResult, result);
  }

  @Test(expected = NullPointerException.class)
  public void testTransformListWithNullInput() {
    List<String> input = null;
    ListTransformer.transformList(input);
  }
}
