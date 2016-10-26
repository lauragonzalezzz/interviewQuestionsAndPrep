// Write a method that takes 3 int inputs of triangle side lengths and returns a triangle type enum.

public class TriangleTypesQuestion
{
  enum TriangleTypes
  {
    Equilateral,
    Isosceles,
    Scalene,
    Invalid
  }

  public static void findTriangleType(int a, int b, int c)
  {
    if (a <= 0 || b <=0 || c <= 0)
      Console.WriteLine(TriangleTypes.Invalid);
    if (a + b > c || a + c > b || b + c > a)
      Console.WriteLine(TriangleTypes.Invalid);
    if (a == b && b == c)
      Console.WriteLine(TriangleTypes.Equilateral);
    else if (a == b || a == c || b == c)
      Console.WriteLine(TriangleTypes.Isosceles);
    else
      Console.WriteLine(TriangleTypes.Scalene);
  }

}
