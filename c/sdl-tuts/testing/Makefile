CXX = gcc
SDL = -L/usr/local/opt/sdl2/lib -lsdl2
CXXFLAGS = -Wall -c -std=c99
LDFLAGS = $(SDL)
EXE = main

all: $(EXE)

$(EXE): main.o
	$(CXX) $(LDFLAGS) $< -o $@

main.o: main.c
	$(CXX) $(CXXFLAGS) $< -o $@

clean:
	rm *.o && rm $(EXE)
