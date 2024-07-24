from app.app import app


class TestApi:
    def test_get_number(self):
        """
        Assert we get a random int in our expected range
        """
        response = app.test_client().get('/number')
        data = response.json
        number = data['number']

        assert type(number) is int
        assert 0 <= number <= 9999999
