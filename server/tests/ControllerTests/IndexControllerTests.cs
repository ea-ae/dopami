using Xunit;
using dopami.Controllers;
using System.Text.Encodings.Web;

namespace tests;

public class IndexControllerTests {
    private readonly IndexController controller;

    public IndexControllerTests() {
        controller = new IndexController();
    }

    [Fact]
    public void Index_Call_ReturnsIndexText() {
        var expected = "API Index";

        var actual = controller.Index();

        Assert.Equal(expected, actual);
    }

    [Theory]
    [InlineData("hello123!")]
    [InlineData("<div>")]
    [InlineData("")]
    public void Print_Text_PrintsText(string text) {
        var expected = "print:" + HtmlEncoder.Default.Encode(text);

        var actual = controller.Print(text);

        Assert.Equal(expected, actual);
    }
}
