--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2021-01-03 18:12:09

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2834 (class 1262 OID 32773)
-- Name: tetris; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE tetris WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';


ALTER DATABASE tetris OWNER TO postgres;

\connect tetris

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 32776)
-- Name: player; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player (
    id integer NOT NULL,
    name character varying
);


ALTER TABLE public.player OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 32786)
-- Name: rating; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rating (
    id integer NOT NULL,
    point integer NOT NULL,
    date date NOT NULL,
    player_id integer NOT NULL
);


ALTER TABLE public.rating OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 32784)
-- Name: rating_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.rating ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.rating_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 202 (class 1259 OID 32774)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.player ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2826 (class 0 OID 32776)
-- Dependencies: 203
-- Data for Name: player; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.player (id, name) OVERRIDING SYSTEM VALUE VALUES (1, 'GOGO');
INSERT INTO public.player (id, name) OVERRIDING SYSTEM VALUE VALUES (2, 'GAGA');
INSERT INTO public.player (id, name) OVERRIDING SYSTEM VALUE VALUES (3, 'GUGU');
INSERT INTO public.player (id, name) OVERRIDING SYSTEM VALUE VALUES (4, 'Goo');
INSERT INTO public.player (id, name) OVERRIDING SYSTEM VALUE VALUES (5, 'HOHO');
INSERT INTO public.player (id, name) OVERRIDING SYSTEM VALUE VALUES (6, 'Player');


--
-- TOC entry 2828 (class 0 OID 32786)
-- Dependencies: 205
-- Data for Name: rating; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (1, 1230, '2020-12-28', 1);
INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (2, 1230, '2020-12-29', 1);
INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (3, 1000, '2021-01-03', 6);
INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (4, 210, '2020-12-30', 3);
INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (5, 210, '2020-12-30', 3);
INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (6, 140, '2020-12-30', 2);
INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (7, 110, '2020-05-28', 5);
INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (8, 110, '2021-01-03', 6);
INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (9, 100, '2020-05-28', 4);
INSERT INTO public.rating (id, point, date, player_id) OVERRIDING SYSTEM VALUE VALUES (10, 10, '2020-05-27', 1);


--
-- TOC entry 2835 (class 0 OID 0)
-- Dependencies: 204
-- Name: rating_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.rating_id_seq', 6, true);


--
-- TOC entry 2836 (class 0 OID 0)
-- Dependencies: 202
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 5, true);


--
-- TOC entry 2697 (class 2606 OID 32790)
-- Name: rating rating_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT rating_pkey PRIMARY KEY (id);


--
-- TOC entry 2695 (class 2606 OID 32783)
-- Name: player user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 2698 (class 2606 OID 32791)
-- Name: rating rating_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rating
    ADD CONSTRAINT rating_user_id_fkey FOREIGN KEY (player_id) REFERENCES public.player(id);


-- Completed on 2021-01-03 18:12:09

--
-- PostgreSQL database dump complete
--

