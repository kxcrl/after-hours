defmodule ApplicationRouter do
  use Dynamo.Router

  prepare do
    conn.fetch([:cookies, :params])
  end

  get "/" do
    conn = conn.assign(:title, "Welcome to Dynamo!")
    render conn, "index.html"
  end

  get "/stream" do
    conn = conn.resp_content_type("text/event-stream")
    conn = conn.send_chunked(200)

    iterator = Stream.repeatedly(fn -> :random.uniform end)

    Enum.each iterator, fn(element) ->
      { :ok, conn } = conn.chunk "data: #{element}\n\n"
      await conn, 200, &on_wake_up(&1, &2), &on_time_out(&1)
    end
  end

  defp on_wake_up(_arg1, _arg2) do
  end

  defp on_time_out(_arg1) do
  end
end
